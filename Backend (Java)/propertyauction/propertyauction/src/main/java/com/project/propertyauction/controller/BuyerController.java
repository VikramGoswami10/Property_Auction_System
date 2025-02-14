package com.project.propertyauction.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.propertyauction.beans.Buyer;
import com.project.propertyauction.services.BuyerService;

@RestController
@RequestMapping("api/buyer")
public class BuyerController {
	
	@Autowired
	BuyerService buyerServ;
	
	 // Get All Buyers
    @GetMapping
    public List<Buyer> getAllBuyers() {
        return buyerServ.getAllBuyers();
    }

    // Get Buyer By Id
    @GetMapping("/{id}")
    public ResponseEntity<?> getBuyerById(@PathVariable int id) {
        Buyer buyer = buyerServ.getBuyerById(id);
        if (buyer == null) {
            return ResponseEntity.status(404).body("Buyer not found");
        }
        return ResponseEntity.ok(buyer);
    }

    // Create Buyer
    @PostMapping
    public ResponseEntity<?> createBuyer(@RequestBody Buyer buyer) {
        try {
            Buyer createdBuyer = buyerServ.createBuyer(buyer);
            return ResponseEntity.ok().body("Buyer created successfully with ID: " + createdBuyer.getBuyerId());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error creating buyer: " + e.getMessage());
        }
    }

    // Update Buyer
    @PutMapping("/{id}")
    public ResponseEntity<?> updateBuyer(@PathVariable int id, @RequestBody Buyer buyer) {
        Buyer updatedBuyer = buyerServ.updateBuyer(id, buyer);
        if (updatedBuyer == null) {
            return ResponseEntity.status(404).body("Buyer not found");
        }
        return ResponseEntity.ok(updatedBuyer);
    }

    // Delete Buyer
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBuyer(@PathVariable int id) {
        boolean isDeleted = buyerServ.deleteBuyer(id);
        if (!isDeleted) {
            return ResponseEntity.status(404).body("Buyer not found");
        }
        return ResponseEntity.ok("Buyer deleted successfully");
    }
    
}
