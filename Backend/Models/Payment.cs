using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Payment
{
    public int PaymentId { get; set; }

    public int AuctionId { get; set; }

    public int BuyerId { get; set; }

    public double PaymentAmount { get; set; }

    public DateTime PaymentDate { get; set; }

    public string PaymentMethod { get; set; } = null!;

    public virtual Auction Auction { get; set; } = null!;
}
