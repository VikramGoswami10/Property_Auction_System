using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class BiddingHistory
{
    public int BiddinghistoryId { get; set; }

    public int AuctionId { get; set; }

    public int BuyerId { get; set; }

    public double BidAmount { get; set; }

    public DateTime Time { get; set; }

    public virtual Auction Auction { get; set; } = null!;
}
