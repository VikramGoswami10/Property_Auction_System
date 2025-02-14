package com.project.propertyauction.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.propertyauction.beans.User;
import com.project.propertyauction.dao.UserDao;
import com.project.propertyauction.dto.LoginRequest;
import com.project.propertyauction.dto.LoginResponse;

import jakarta.servlet.http.HttpSession;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao udao;
	
	private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	@Override
	public ResponseEntity<?> registerUser(User user) {
		// TODO Auto-generated method stub
		 if (user.getEmail() == null || user.getEmail().trim().isEmpty() || 
				 user.getPassword() == null || user.getPassword().trim().isEmpty()) {
		         return ResponseEntity.badRequest().body("Email and password are required.");
		 }
		 if (udao.findByEmail(user.getEmail()).isPresent()) {
		     return ResponseEntity.badRequest().body("Email already exists.");
		 }
		 
		 user.setPassword(passwordEncoder.encode(user.getPassword()));

		 try {
		    udao.save(user);
		 } catch (Exception e) {
		    return ResponseEntity.status(500).body("An error occurred while saving the user.");
		 }

		return ResponseEntity.ok("User registered Successfully");
	}

	@Override
	public ResponseEntity<?> loginUser(LoginRequest request, HttpSession session) {
		// TODO Auto-generated method stub
		Optional<User> userOptional = udao.findByEmail(request.getEmail());

        if (userOptional.isEmpty() || !passwordEncoder.matches(request.getPassword(), userOptional.get().getPassword())) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }

        User user = userOptional.get();
        session.setAttribute("UserId", user.getuId());
        session.setAttribute("UserEmail", user.getEmail());
        session.setAttribute("UserRole", user.getRole());

        return ResponseEntity.ok(new LoginResponse(user.getuId(), user.getName(), user.getEmail(), user.getRole()));
	}

	@Override
	public ResponseEntity<?> logoutUser(HttpSession session) {
		// TODO Auto-generated method stub
		 session.invalidate();
		return ResponseEntity.ok("Logged out successfully");
	}

	@Override
	public ResponseEntity<?> getCurrentUser(HttpSession session) {
		// TODO Auto-generated method stub
		 	Integer userId = (Integer) session.getAttribute("UserId");
	        String userEmail = (String) session.getAttribute("UserEmail");
	        String userRole = (String) session.getAttribute("UserRole");

	        if (userId == null || userEmail == null || userRole == null) {
	            return ResponseEntity.status(401).body("User not logged in");
	        }
	        
		return ResponseEntity.ok(new LoginResponse(userId, null, userEmail, userRole));
	}
	

}
