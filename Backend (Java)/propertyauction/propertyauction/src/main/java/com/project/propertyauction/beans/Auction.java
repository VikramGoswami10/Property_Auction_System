package com.project.propertyauction.beans;

import java.time.LocalDateTime;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "auction")
public class Auction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int auctionId;

    @OneToOne
    @JoinColumn(name = "propertyId", nullable = false)
    private Property property;

    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime startTime;

    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime endTime;

    private String status;

    @OneToMany(mappedBy = "auction", cascade = CascadeType.ALL)
    private List<BiddingHistory> biddingHistories;

    @OneToOne(mappedBy = "auction", cascade = CascadeType.ALL)
    private List<Payment> payments;

	public Auction() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Auction(int auctionId, Property property, LocalDateTime startTime, LocalDateTime endTime, String status,
			List<BiddingHistory> biddingHistories, List<Payment> payments) {
		super();
		this.auctionId = auctionId;
		this.property = property;
		this.startTime = startTime;
		this.endTime = endTime;
		this.status = status;
		this.biddingHistories = biddingHistories;
		this.payments = payments;
	}

	public int getAuctionId() {
		return auctionId;
	}

	public void setAuctionId(int auctionId) {
		this.auctionId = auctionId;
	}

	public Property getProperty() {
		return property;
	}

	public void setProperty(Property property) {
		this.property = property;
	}

	public LocalDateTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalDateTime startTime) {
		this.startTime = startTime;
	}

	public LocalDateTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalDateTime endTime) {
		this.endTime = endTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<BiddingHistory> getBiddingHistories() {
		return biddingHistories;
	}

	public void setBiddingHistories(List<BiddingHistory> biddingHistories) {
		this.biddingHistories = biddingHistories;
	}

	public List<Payment> getPayments() {
		return payments;
	}

	public void setPayments(List<Payment> payments) {
		this.payments = payments;
	}

	@Override
	public String toString() {
		return "Auction [auctionId=" + auctionId + ", property=" + property + ", startTime=" + startTime + ", endTime="
				+ endTime + ", status=" + status + ", biddingHistories=" + biddingHistories + ", payments=" + payments
				+ "]";
	}
   
}
