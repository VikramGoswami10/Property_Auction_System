package com.project.propertyauction.services;

import org.springframework.http.ResponseEntity;

import com.project.propertyauction.beans.User;
import com.project.propertyauction.dto.LoginRequest;

import jakarta.servlet.http.HttpSession;

public interface UserService {

	ResponseEntity<?> registerUser(User user);

	ResponseEntity<?> loginUser(LoginRequest request, HttpSession session);

	ResponseEntity<?> logoutUser(HttpSession session);

	ResponseEntity<?> getCurrentUser(HttpSession session);

}
