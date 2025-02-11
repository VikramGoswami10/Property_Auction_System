using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Admin
{
    public int AdminId { get; set; }

    public int UId { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public virtual Userinfo UIdNavigation { get; set; } = null!;
}
