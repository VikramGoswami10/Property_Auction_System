package com.project.propertyauction.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.propertyauction.beans.Auction;
import com.project.propertyauction.beans.Property;
import com.project.propertyauction.dao.AuctionDao;
import com.project.propertyauction.dao.PropertyDao;
import com.project.propertyauction.dto.AuctionDTO;

@Service
public class AuctionServiceImpl implements AuctionService {
	
	private final AuctionDao adao;
	private final PropertyDao pdao;
	
	//CONSTRUCTOR INJECTION
	@Autowired
	public AuctionServiceImpl(AuctionDao adao, PropertyDao pdao){
		this.adao = adao;	
		this.pdao = pdao;
	}

	@Override
	public Auction createAuction(AuctionDTO auctionDTO) {
		// TODO Auto-generated method stub
		 if (auctionDTO == null) {
	            throw new IllegalArgumentException("Invalid auction data");
	        }
		 Property property = pdao.findById(auctionDTO.getPropertyId())
	                .orElseThrow(() -> new RuntimeException("Property not found"));

	        Auction auction = new Auction();
	        auction.setProperty(property);
	        auction.setStartTime(auctionDTO.getStartTime());
	        auction.setEndTime(auctionDTO.getEndTime());
	        auction.setStatus("ongoing");

		return adao.save(auction);
	}

	@Override
	public Auction getAuctionById(int id) {
		// TODO Auto-generated method stub
		return adao.findById(id).orElse(null);
	}

	@Override
	public List<Auction> getAllAuctions() {
		// TODO Auto-generated method stub
		return adao.findAll();
	}

}
