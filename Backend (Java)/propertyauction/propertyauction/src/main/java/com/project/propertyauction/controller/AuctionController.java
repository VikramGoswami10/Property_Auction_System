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

import com.project.propertyauction.beans.Auction;
import com.project.propertyauction.dto.AuctionDTO;
import com.project.propertyauction.services.AuctionService;

@RestController
@RequestMapping("api/auction")
public class AuctionController {
    @Autowired
    AuctionService auctionServ;

    @PostMapping("/create")
    public ResponseEntity<?> createAuction(@RequestBody AuctionDTO auctionDTO) {
        try {
            Auction auction = auctionServ.createAuction(auctionDTO);
            return ResponseEntity.ok().body("Auction created successfully! Auction ID: " + auction.getAuctionId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error creating auction: " + e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAuctionById(@PathVariable int id) {
        Auction auction = auctionServ.getAuctionById(id);
        if (auction == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(auction);
    }

    @GetMapping
    public ResponseEntity<List<Auction>> getAllAuctions() {
        List<Auction> auctions = auctionServ.getAllAuctions();
        return ResponseEntity.ok(auctions);
    }
}
