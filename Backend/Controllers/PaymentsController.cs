using Backend.DTO;
using Microsoft.AspNetCore.Mvc;
using Razorpay.Api;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class PaymentsController : ControllerBase
{
    private readonly RazorpayClient _razorpayClient;

    public PaymentsController()
    {
        _razorpayClient = new RazorpayClient("YOUR_KEY_ID", "YOUR_KEY_SECRET");
    }

    // Create Razorpay Order
    [HttpPost("createOrder")]
    public IActionResult CreateOrder([FromBody] PaymentRequestDTO request)
    {
        try
        {
            Dictionary<string, object> options = new Dictionary<string, object>
            {
                { "amount", request.Amount }, // Amount in paise
                { "currency", request.Currency },
                { "payment_capture", "1" }, // Auto-capture
                { "receipt", Guid.NewGuid().ToString() }
            };

            Order order = _razorpayClient.Order.Create(options);

            return Ok(new
            {
                orderId = order["id"].ToString(),
                amount = request.Amount,
                currency = request.Currency
            });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Failed to create order", error = ex.Message });
        }
    }

    // Capture Razorpay Payment
    [HttpPost("capture")]
    public async Task<IActionResult> CapturePayment([FromBody] CapturePaymentRequestDTO request)
    {
        try
        {
            Razorpay.Api.Payment razorpayPayment = _razorpayClient.Payment.Fetch(request.razorpay_payment_id);

            if (razorpayPayment == null || razorpayPayment.Attributes("status").ToString() != "authorized")
            {
                return BadRequest(new { message = "Invalid or Unsuccessful Payment" });
            }
            Dictionary<string, object> captureOptions = new Dictionary<string, object>
            {
                { "amount", razorpayPayment.Attributes("amount") }, // Amount in paise
                { "currency", "INR" } // Ensure currency is passed
            };

            // Capture payment with parameters
            Razorpay.Api.Payment capturedPayment = razorpayPayment.Capture(captureOptions);

            await SavePaymentDetails(request.razorpay_payment_id, request.razorpay_order_id, capturedPayment.Attributes("amount"));

            return Ok(new { message = "Payment captured successfully", paymentId = request.razorpay_payment_id });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Payment capture failed", error = ex.Message });
        }
    }

    private async Task SavePaymentDetails(string paymentId, string orderId, object amount)
    {
        // Implement database saving logic here if needed
        await Task.CompletedTask;
    }
}