package com.project.propertyauction.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.propertyauction.dto.CapturePaymentRequestDTO;
import com.project.propertyauction.dto.PaymentRequestDTO;
import com.project.propertyauction.services.PaymentService;

@RestController
@RequestMapping("api/payment")
public class PaymentController {
	
	private final PaymentService paymentServ;

    @Autowired
    public PaymentController(PaymentService paymentServ) {
        this.paymentServ = paymentServ;
    }
	
    @PostMapping("/createOrder")
    public ResponseEntity<?> createOrder(@RequestBody PaymentRequestDTO request) {
        try {
            Map<String, Object> orderDetails = paymentServ.createOrder(request);
            return ResponseEntity.ok(orderDetails);
        } catch (Exception ex) {
            return ResponseEntity.badRequest().body(Map.of("message", "Failed to create order", "error", ex.getMessage()));
        }
    }

    @PostMapping("/capture")
    public ResponseEntity<?> capturePayment(@RequestBody CapturePaymentRequestDTO request) {
        try {
            String message = paymentServ.capturePayment(request);
            return ResponseEntity.ok(Map.of("message", message));
        } catch (Exception ex) {
            return ResponseEntity.badRequest().body(Map.of("message", "Payment capture failed", "error", ex.getMessage()));
        }
    }
	
}
