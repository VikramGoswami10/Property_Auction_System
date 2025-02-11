using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Buyer
{
    public int BuyerId { get; set; }

    public int UId { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public virtual Userinfo UIdNavigation { get; set; } = null!;
}
