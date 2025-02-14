package com.project.propertyauction.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.propertyauction.beans.Property;

public interface PropertyDao extends JpaRepository<Property, Integer>{

}
