namespace Backend.DTO
{
    public class CapturePaymentRequestDTO
    {
        public string razorpay_payment_id { get; set; }
        public string razorpay_order_id { get; set; }
    }
}
