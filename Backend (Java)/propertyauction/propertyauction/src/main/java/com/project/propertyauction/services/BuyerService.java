package com.project.propertyauction.services;

import java.util.List;

import com.project.propertyauction.beans.Buyer;

public interface BuyerService {

	List<Buyer> getAllBuyers();

	Buyer getBuyerById(int id);

	Buyer createBuyer(Buyer buyer);

	Buyer updateBuyer(int id, Buyer buyer);

	boolean deleteBuyer(int id);

}
