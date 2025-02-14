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

import com.project.propertyauction.beans.Seller;
import com.project.propertyauction.services.SellerService;

@RestController
@RequestMapping("api/seller")
public class SellerController {
	
	@Autowired
	private SellerService sellerServ;
	
	 // Get All Sellers
    @GetMapping
    public List<Seller> getAllSellers() {
        return sellerServ.getAllSellers();
    }

    // Get Seller By Id
    @GetMapping("/{id}")
    public ResponseEntity<?> getSellerById(@PathVariable int id) {
        Seller seller = sellerServ.getSellerById(id);
        if (seller == null) {
            return ResponseEntity.status(404).body("Seller not found");
        }
        return ResponseEntity.ok(seller);
    }

    // Create Seller
    @PostMapping
    public ResponseEntity<?> createSeller(@RequestBody Seller seller) {
        try {
            Seller createdSeller = sellerServ.createSeller(seller);
            return ResponseEntity.ok().body("Seller created successfully with ID: " + createdSeller.getSellerId());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error creating seller: " + e.getMessage());
        }
    }

    // Update Seller
    @PutMapping("/{id}")
    public ResponseEntity<?> updateSeller(@PathVariable int id, @RequestBody Seller seller) {
        Seller updatedSeller = sellerServ.updateSeller(id, seller);
        if (updatedSeller == null) {
            return ResponseEntity.status(404).body("Seller not found");
        }
        return ResponseEntity.ok(updatedSeller);
    }

    // Delete Seller
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSeller(@PathVariable int id) {
        boolean isDeleted = sellerServ.deleteSeller(id);
        if (!isDeleted) {
            return ResponseEntity.status(404).body("Seller not found");
        }
        return ResponseEntity.ok("Seller deleted successfully");
    }
}
