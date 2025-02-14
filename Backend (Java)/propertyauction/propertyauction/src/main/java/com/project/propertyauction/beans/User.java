package com.project.propertyauction.beans;

import jakarta.persistence.CascadeType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uId;

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @Column(name = "email", nullable = false, length = 50, unique = true)
    private String email;

    @Column(name = "password", nullable = false, length = 255)
    private String password;

    @Column(name = "role", nullable = false, length = 50)
    private String role = "buyer";

    @OneToOne(mappedBy = "User", cascade = CascadeType.ALL)
    private Admin admin;

    @OneToOne(mappedBy = "User", cascade = CascadeType.ALL)
    private Buyer buyer;

    @OneToOne(mappedBy = "User", cascade = CascadeType.ALL)
    private Seller seller;

	public User() {
		super();
	}

	public User(int uId, String name, String email, String password, String role, Admin admin, Buyer buyer,
			Seller seller) {
		super();
		this.uId = uId;
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
		this.admin = admin;
		this.buyer = buyer;
		this.seller = seller;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public Buyer getBuyer() {
		return buyer;
	}

	public void setBuyer(Buyer buyer) {
		this.buyer = buyer;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	@Override
	public String toString() {
		return "User [uId=" + uId + ", name=" + name + ", email=" + email + ", password=" + password + ", role=" + role
				+ ", admin=" + admin + ", buyer=" + buyer + ", seller=" + seller + "]";
	}
}
