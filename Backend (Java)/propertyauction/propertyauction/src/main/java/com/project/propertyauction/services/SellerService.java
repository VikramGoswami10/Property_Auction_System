package com.project.propertyauction.services;

import java.util.List;

import com.project.propertyauction.beans.Seller;

public interface SellerService {

	List<Seller> getAllSellers();

	Seller getSellerById(int id);

	Seller createSeller(Seller seller);

	Seller updateSeller(int id, Seller seller);

	boolean deleteSeller(int id);

}
