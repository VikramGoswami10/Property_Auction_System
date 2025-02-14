package com.project.propertyauction.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.propertyauction.beans.Buyer;
import com.project.propertyauction.dao.BuyerDao;

@Service
public class BuyerServiceImpl implements BuyerService{
	
	@Autowired
	private BuyerDao bdao;

	@Override
	public List<Buyer> getAllBuyers() {
		// TODO Auto-generated method stub
		return bdao.findAll();
	}

	@Override
	public Buyer getBuyerById(int id) {
		// TODO Auto-generated method stub
		return bdao.findById(id).orElse(null);
	}

	@Override
	public Buyer createBuyer(Buyer buyer) {
		// TODO Auto-generated method stub
		return bdao.save(buyer);
	}

	@Override
	public Buyer updateBuyer(int id, Buyer buyer) {
		// TODO Auto-generated method stub
		 Optional<Buyer> existingBuyer = bdao.findById(id);
	        if (existingBuyer.isPresent()) {
	            Buyer updatedBuyer = existingBuyer.get();
	            updatedBuyer.setName(buyer.getName());			
	            updatedBuyer.setEmail(buyer.getEmail());
	            return bdao.save(updatedBuyer);
	        }
		return null;
	}

	@Override
	public boolean deleteBuyer(int id) {
		// TODO Auto-generated method stub
		if(bdao.existsById(id)) {
			bdao.deleteById(id);
			return true;
		}
		return false;
	}

}
