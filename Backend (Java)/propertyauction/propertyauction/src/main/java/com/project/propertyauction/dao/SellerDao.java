package com.project.propertyauction.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.propertyauction.beans.Seller;

public interface SellerDao extends JpaRepository<Seller, Integer>{

}
