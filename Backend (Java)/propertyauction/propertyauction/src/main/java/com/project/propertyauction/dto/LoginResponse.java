package com.project.propertyauction.dto;

public class LoginResponse {
	private int uId;
	private String name;
	private String email;
	private String role;
	
	public LoginResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LoginResponse(int uId, String name, String email, String role) {
		super();
		this.uId = uId;
		this.name = name;
		this.email = email;
		this.role = role;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "LoginResponse [uId=" + uId + ", name=" + name + ", email=" + email + ", role=" + role + "]";
	}
	
}
