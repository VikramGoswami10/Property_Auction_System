package com.project.propertyauction.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.propertyauction.beans.Property;
import com.project.propertyauction.dao.PropertyDao;

@Service
public class PropertyServiceImpl implements PropertyService{
	@Autowired
	private PropertyDao pdao;

	@Override
	public Property createProperty(Property property) {
		// TODO Auto-generated method stub
		return pdao.save(property);
	}

	@Override
	public List<Property> getAllProperties() {
		// TODO Auto-generated method stub
		return pdao.findAll();
	}

	@Override
	public Property getPropertyById(int id) {
		// TODO Auto-generated method stub
		return pdao.findById(id).orElse(null);
	}
	
}
