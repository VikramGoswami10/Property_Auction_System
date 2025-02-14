package com.project.propertyauction.dto;

public class PaymentRequestDTO {
	 private int amount;
	 private String currency;
	public PaymentRequestDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PaymentRequestDTO(int amount, String currency) {
		super();
		this.amount = amount;
		this.currency = currency;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	@Override
	public String toString() {
		return "PaymentRequestDTO [amount=" + amount + ", currency=" + currency + "]";
	}
	 
}
