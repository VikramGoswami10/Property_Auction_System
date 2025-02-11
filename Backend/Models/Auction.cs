using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Auction
{
    public int AuctionId { get; set; }

    public int PropertyId { get; set; }

    public DateTime StartTime { get; set; }

    public DateTime EndTime { get; set; }

    public string Status { get; set; } = null!;

    public virtual ICollection<BiddingHistory> BiddingHistories { get; set; } = new List<BiddingHistory>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual Property Property { get; set; } = null!;
}
