package com.project.propertyauction.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.propertyauction.beans.User;
import com.project.propertyauction.dto.LoginRequest;
import com.project.propertyauction.services.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("api/user")
public class UserController {

	  @Autowired
	  private UserService userServ;

	    @PostMapping("/register")
	    public ResponseEntity<?> register(@RequestBody User user) {
	        return userServ.registerUser(user);
	    }

	    @PostMapping("/login")
	    public ResponseEntity<?> login(@RequestBody LoginRequest request, HttpSession session) {
	        return userServ.loginUser(request, session);
	    }

	    @PostMapping("/logout")
	    public ResponseEntity<?> logout(HttpSession session) {
	        return userServ.logoutUser(session);
	    }

	    @GetMapping("/current-user")
	    public ResponseEntity<?> getCurrentUser(HttpSession session) {
	        return userServ.getCurrentUser(session);
	    }
	    
}
