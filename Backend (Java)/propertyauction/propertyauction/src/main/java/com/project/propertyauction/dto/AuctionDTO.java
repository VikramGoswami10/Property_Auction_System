package com.project.propertyauction.dto;

import java.time.LocalDateTime;

public class AuctionDTO {
	private int auctionId;
	private int propertyId;
	private LocalDateTime startTime;
	private LocalDateTime endTime;
	private String status;
	
	public AuctionDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AuctionDTO(int auctionId, int propertyId, LocalDateTime startTime, LocalDateTime endTime, String status) {
		super();
		this.auctionId = auctionId;
		this.propertyId = propertyId;
		this.startTime = startTime;
		this.endTime = endTime;
		this.status = status;
	}

	public int getAuctionId() {
		return auctionId;
	}

	public void setAuctionId(int auctionId) {
		this.auctionId = auctionId;
	}

	public int getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(int propertyId) {
		this.propertyId = propertyId;
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

	@Override
	public String toString() {
		return "AuctionDTO [auctionId=" + auctionId + ", propertyId=" + propertyId + ", startTime=" + startTime
				+ ", endTime=" + endTime + ", status=" + status + "]";
	}
	
}
