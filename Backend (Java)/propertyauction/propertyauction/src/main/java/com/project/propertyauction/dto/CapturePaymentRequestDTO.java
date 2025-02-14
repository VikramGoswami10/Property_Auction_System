package com.project.propertyauction.dto;

public class CapturePaymentRequestDTO {
	private String razorpay_payment_id;
    private String razorpay_order_id;
    
	public CapturePaymentRequestDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CapturePaymentRequestDTO(String razorpay_payment_id, String razorpay_order_id) {
		super();
		this.razorpay_payment_id = razorpay_payment_id;
		this.razorpay_order_id = razorpay_order_id;
	}

	public String getRazorpay_payment_id() {
		return razorpay_payment_id;
	}

	public void setRazorpay_payment_id(String razorpay_payment_id) {
		this.razorpay_payment_id = razorpay_payment_id;
	}

	public String getRazorpay_order_id() {
		return razorpay_order_id;
	}

	public void setRazorpay_order_id(String razorpay_order_id) {
		this.razorpay_order_id = razorpay_order_id;
	}

	@Override
	public String toString() {
		return "CapturePaymentRequestDTO [razorpay_payment_id=" + razorpay_payment_id + ", razorpay_order_id="
				+ razorpay_order_id + "]";
	}
    
}
