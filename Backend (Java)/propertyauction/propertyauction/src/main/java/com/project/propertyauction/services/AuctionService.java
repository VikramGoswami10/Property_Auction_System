package com.project.propertyauction.services;

import java.util.List;

import com.project.propertyauction.beans.Auction;
import com.project.propertyauction.dto.AuctionDTO;

public interface AuctionService {

	Auction createAuction(AuctionDTO auctionDTO);

	Auction getAuctionById(int id);

	List<Auction> getAllAuctions();

}
