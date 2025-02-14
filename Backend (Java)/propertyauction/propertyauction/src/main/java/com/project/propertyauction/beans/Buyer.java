package com.project.propertyauction.beans;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "buyer")  //ADDED BIDS NEEDS CHANGES IN CONSTRUCTOR AND LOWER PART
public class Buyer {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int buyerId;

	 private int uId;

	 @Column(nullable = false)
	 private String name;

	 @Column(nullable = false, unique = true)
	 private String email;

	 @OneToOne
	 @JoinColumn(name = "uId", referencedColumnName = "uId", nullable = false)
	 private User uIdNavigation;
	 
	 @OneToMany(mappedBy = "buyer", cascade = CascadeType.ALL)
	 private List<BiddingHistory> biddingHistories;
	 
	 @OneToOne(mappedBy = "payment", cascade = CascadeType.ALL)
	 private Payment payment;

	public Buyer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Buyer(int buyerId, int uId, String name, String email, User uIdNavigation,
			List<BiddingHistory> biddingHistories, Payment payment) {
		super();
		this.buyerId = buyerId;
		this.uId = uId;
		this.name = name;
		this.email = email;
		this.uIdNavigation = uIdNavigation;
		this.biddingHistories = biddingHistories;
		this.payment = payment;
	}

	public int getBuyerId() {
		return buyerId;
	}

	public void setBuyerId(int buyerId) {
		this.buyerId = buyerId;
	}

	public int getuId() {
		return uId;
	}

	public void setuId(int uId) {
		this.uId = uId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public User getuIdNavigation() {
		return uIdNavigation;
	}

	public void setuIdNavigation(User uIdNavigation) {
		this.uIdNavigation = uIdNavigation;
	}

	public List<BiddingHistory> getBiddingHistories() {
		return biddingHistories;
	}

	public void setBiddingHistories(List<BiddingHistory> biddingHistories) {
		this.biddingHistories = biddingHistories;
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	@Override
	public String toString() {
		return "Buyer [buyerId=" + buyerId + ", uId=" + uId + ", name=" + name + ", email=" + email + ", uIdNavigation="
				+ uIdNavigation + ", biddingHistories=" + biddingHistories + ", payment=" + payment + "]";
	}
	 
}
