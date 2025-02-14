package com.project.propertyauction.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.propertyauction.beans.Property;
import com.project.propertyauction.services.PropertyService;

@RestController
@RequestMapping("/api/properties")
public class PropertyController {
	 @Autowired
	 private PropertyService propertyServ;

	    // Create Property
	    @PostMapping("/create")
	    public ResponseEntity<?> createProperty(@RequestBody Property property) {
	        try {
	            Property createdProperty = propertyServ.createProperty(property);
	            return ResponseEntity.ok().body("Property created successfully with ID: " + createdProperty.getPropertyId());
	        } catch (Exception e) {
	            return ResponseEntity.status(500).body("Error creating property: " + e.getMessage());
	        }
	    }

	    // Get All Properties
	    @GetMapping
	    public List<Property> getAllProperties() {
	        return propertyServ.getAllProperties();
	    }

	    // Get Property By Id
	    @GetMapping("/{id}")
	    public ResponseEntity<?> getPropertyById(@PathVariable int id) {
	        Property property = propertyServ.getPropertyById(id);
	        if (property == null) {
	            return ResponseEntity.status(404).body("Property not found");
	        }
	        return ResponseEntity.ok(property);
	    }

}
