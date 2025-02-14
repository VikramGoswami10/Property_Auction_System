package com.project.propertyauction.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.propertyauction.beans.Seller;
import com.project.propertyauction.dao.SellerDao;

@Service
public class SellerServiceImpl implements SellerService{
	
	@Autowired
	SellerDao sdao;

	@Override
	public List<Seller> getAllSellers() {
		// TODO Auto-generated method stub
		return sdao.findAll();
	}

	@Override
	public Seller getSellerById(int id) {
		// TODO Auto-generated method stub
		return sdao.findById(id).orElse(null);
	}

	@Override
	public Seller createSeller(Seller seller) {
		// TODO Auto-generated method stub
		return sdao.save(seller);
	}

	@Override
	public Seller updateSeller(int id, Seller seller) {
		// TODO Auto-generated method stub
		 Optional<Seller> existingSeller = sdao.findById(id);
	        if (existingSeller.isPresent()) {
	            Seller updatedSeller = existingSeller.get();
	            updatedSeller.setName(seller.getName());
	            updatedSeller.setEmail(seller.getEmail());
	            return sdao.save(updatedSeller);
	        }
		return null;
	}

	@Override
	public boolean deleteSeller(int id) {
		// TODO Auto-generated method stub
		if(sdao.existsById(id)) {
			sdao.deleteById(id);
			return true;
		}
		return false;
	}
	
}
