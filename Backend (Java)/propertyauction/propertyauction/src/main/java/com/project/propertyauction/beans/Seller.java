package com.project.propertyauction.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "seller")
public class Seller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sellerId;

    private int uId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @OneToOne
    @JoinColumn(name = "uId", referencedColumnName = "uId", nullable = false)
    private User uIdNavigation;

	public Seller() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Seller(int sellerId, int uId, String name, String email, User uIdNavigation) {
		super();
		this.sellerId = sellerId;
		this.uId = uId;
		this.name = name;
		this.email = email;
		this.uIdNavigation = uIdNavigation;
	}

	public int getSellerId() {
		return sellerId;
	}

	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
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

	@Override
	public String toString() {
		return "Seller [sellerId=" + sellerId + ", uId=" + uId + ", name=" + name + ", email=" + email
				+ ", uIdNavigation=" + uIdNavigation + "]";
	}
    
}
