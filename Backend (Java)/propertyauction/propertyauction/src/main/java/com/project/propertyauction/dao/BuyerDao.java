package com.project.propertyauction.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.propertyauction.beans.Buyer;

public interface BuyerDao extends JpaRepository<Buyer,Integer>{

}
