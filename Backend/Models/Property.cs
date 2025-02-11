using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public partial class Property
{
    [Key]
    public int PropertyId { get; set; }

    public int SellerId { get; set; }

    public int CategoryId { get; set; }

    [Required]
    [StringLength(255)]
    public string Title { get; set; } = null!;

    [Url]
    public string Image { get; set; } = null!;

    [Required]
    [MaxLength(100)]
    public string Address { get; set; } = null!;

    [Required]
    [MaxLength(250)]
    public string Description { get; set; } = null!;

    public virtual ICollection<Auction> Auctions { get; set; } = new List<Auction>();

    public virtual Category Category { get; set; } = null!;
}
