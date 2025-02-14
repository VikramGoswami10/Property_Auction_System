package com.project.propertyauction.services;

import java.util.Map;

import com.project.propertyauction.dto.CapturePaymentRequestDTO;
import com.project.propertyauction.dto.PaymentRequestDTO;
import com.razorpay.RazorpayException;

public interface PaymentService {

	Map<String, Object> createOrder(PaymentRequestDTO request) throws Exception;

	String capturePayment(CapturePaymentRequestDTO request) throws Exception;

}
