package com.project.propertyauction.beans;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int categoryId;

    @Column(nullable = false)
    private String name;

    @OneToOne(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Property> properties;
    
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Category(int categoryId, String name, List<Property> properties) {
		super();
		this.categoryId = categoryId;
		this.name = name;
		this.properties = properties;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Property> getProperties() {
		return properties;
	}

	public void setProperties(List<Property> properties) {
		this.properties = properties;
	}

	@Override
	public String toString() {
		return "Category [categoryId=" + categoryId + ", name=" + name + ", properties=" + properties + "]";
	}
    
}
