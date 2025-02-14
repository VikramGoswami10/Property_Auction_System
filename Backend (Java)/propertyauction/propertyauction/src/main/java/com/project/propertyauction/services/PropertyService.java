package com.project.propertyauction.services;

import java.util.List;

import com.project.propertyauction.beans.Property;

public interface PropertyService {

	Property createProperty(Property property);

	List<Property> getAllProperties();

	Property getPropertyById(int id);

}
