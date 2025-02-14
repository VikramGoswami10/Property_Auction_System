package com.project.propertyauction.beans;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "biddinghistory")
public class BiddingHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int biddingHistoryId;

    @ManyToOne
    @JoinColumn(name = "auctionId", nullable = false)
    private Auction auction;

    @Column(nullable = false)
    private double bidAmount;

    @Temporal(TemporalType.TIMESTAMP)
    private Date time;
    
    @ManyToOne
    @JoinColumn(name = "buyerId" , nullable = false)
    private Buyer buyer;

	public BiddingHistory() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BiddingHistory(int biddingHistoryId, Auction auction, double bidAmount, Date time, Buyer buyer) {
		super();
		this.biddingHistoryId = biddingHistoryId;
		this.auction = auction;
		this.bidAmount = bidAmount;
		this.time = time;
		this.buyer = buyer;
	}

	public int getBiddingHistoryId() {
		return biddingHistoryId;
	}

	public void setBiddingHistoryId(int biddingHistoryId) {
		this.biddingHistoryId = biddingHistoryId;
	}

	public Auction getAuction() {
		return auction;
	}

	public void setAuction(Auction auction) {
		this.auction = auction;
	}

	public double getBidAmount() {
		return bidAmount;
	}

	public void setBidAmount(double bidAmount) {
		this.bidAmount = bidAmount;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public Buyer getBuyer() {
		return buyer;
	}

	public void setBuyer(Buyer buyer) {
		this.buyer = buyer;
	}

	@Override
	public String toString() {
		return "BiddingHistory [biddingHistoryId=" + biddingHistoryId + ", auction=" + auction + ", bidAmount="
				+ bidAmount + ", time=" + time + ", buyer=" + buyer + "]";
	}
    
}
