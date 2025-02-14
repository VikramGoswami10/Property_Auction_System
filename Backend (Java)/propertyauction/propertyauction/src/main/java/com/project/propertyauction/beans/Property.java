package com.project.propertyauction.beans;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "property")
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int propertyId;

    private int sellerId;
    private int categoryId;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false, length = 100)
    private String address;

    @Column(nullable = false, length = 250)
    private String description;

    @OneToOne(mappedBy = "property", cascade = CascadeType.ALL)
    private Auction auctions;
    
    @JoinColumn(name = "sellerId" , nullable = false)
    private Seller seller;

    @OneToOne
    @JoinColumn(name = "categoryId", nullable = false)
    private Category category;
	
	public Property() {
		super();
	}

	public Property(int propertyId, int sellerId, int categoryId, String title, String image, String address,
			String description, Auction auctions, Seller seller, Category category) {
		super();
		this.propertyId = propertyId;
		this.sellerId = sellerId;
		this.categoryId = categoryId;
		this.title = title;
		this.image = image;
		this.address = address;
		this.description = description;
		this.auctions = auctions;
		this.seller = seller;
		this.category = category;
	}

	public int getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(int propertyId) {
		this.propertyId = propertyId;
	}

	public int getSellerId() {
		return sellerId;
	}

	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Auction getAuctions() {
		return auctions;
	}

	public void setAuctions(Auction auctions) {
		this.auctions = auctions;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "Property [propertyId=" + propertyId + ", sellerId=" + sellerId + ", categoryId=" + categoryId
				+ ", title=" + title + ", image=" + image + ", address=" + address + ", description=" + description
				+ ", auctions=" + auctions + ", seller=" + seller + ", category=" + category + "]";
	}

}
