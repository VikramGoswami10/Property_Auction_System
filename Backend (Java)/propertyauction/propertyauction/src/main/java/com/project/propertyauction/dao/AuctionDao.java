package com.project.propertyauction.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.propertyauction.beans.Auction;

public interface AuctionDao extends JpaRepository<Auction, Integer>{

}
