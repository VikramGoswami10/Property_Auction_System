package com.project.propertyauction.services;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.project.propertyauction.dao.PaymentDao;
import com.project.propertyauction.dto.CapturePaymentRequestDTO;
import com.project.propertyauction.dto.PaymentRequestDTO;
import com.project.propertyauction.beans.Payment;  // ✅ Import your entity

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import jakarta.transaction.Transactional;

@Service
public class PaymentServiceImpl implements PaymentService {
    
    private final PaymentDao paydao;
    private final RazorpayClient razorpayClient;

    public PaymentServiceImpl(PaymentDao paydao,
                              @Value("${razorpay.key_id}") String keyId,
                              @Value("${razorpay.key_secret}") String keySecret) throws Exception {
        this.paydao = paydao;
        this.razorpayClient = new RazorpayClient(keyId, keySecret);
    }

    @Override
    public Map<String, Object> createOrder(PaymentRequestDTO request) throws Exception {
        Map<String, Object> options = new HashMap<>();
        options.put("amount", request.getAmount() * 100); // Convert to paise
        options.put("currency", request.getCurrency());
        options.put("payment_capture", 1);
        options.put("receipt", "txn_" + System.currentTimeMillis());

        Order order = razorpayClient.orders.create((JSONObject) options);

        Map<String, Object> response = new HashMap<>();
        response.put("orderId", order.get("id"));
        response.put("amount", request.getAmount());
        response.put("currency", request.getCurrency());

        return response;
    }

    @Override
    @Transactional
    public String capturePayment(CapturePaymentRequestDTO request) throws Exception {
        com.razorpay.Payment razorpayPayment = razorpayClient.payments.fetch(request.getRazorpay_payment_id());

        if (razorpayPayment == null || !"authorized".equals(razorpayPayment.get("status"))) {
            throw new Exception("Invalid or Unsuccessful Payment");
        }

        JSONObject captureOptions = new JSONObject();
        captureOptions.put("amount", razorpayPayment.get("amount").toString());
        captureOptions.put("currency", "INR");

        com.razorpay.Payment capturedPayment = razorpayClient.payments.capture(request.getRazorpay_payment_id(), captureOptions);

        // Save payment details
        savePaymentDetails(request.getRazorpay_payment_id(), request.getRazorpay_order_id(), Double.parseDouble(capturedPayment.get("amount").toString()));

        return "Payment captured successfully";
    }

    private void savePaymentDetails(String paymentId, String orderId, double amount) {
        Payment payment = new Payment();  // ✅ This now refers to your entity
        payment.setPaymentMethod("RAZORPAY");
        payment.setPaymentAmount(amount);
        payment.setPaymentDate(new Date());

        paydao.save(payment);  // ✅ Using save() instead of saveAll()
    }
}
