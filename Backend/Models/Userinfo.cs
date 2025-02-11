using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models;

public partial class Userinfo
{
    [Key]
    public int UId { get; set; }

    [Required]
    [StringLength(50)]
    [Column("name")]
    public string Name { get; set; } = null!;

    [Required, EmailAddress]
    [StringLength(50)]
    [Column("email")]
    public string Email { get; set; } = null!;

    [Required]
    [StringLength(255)]
    [Column("password")]
    public string Password { get; set; } = null!;

    [Required]
    [StringLength(50)]
    [Column("role")]
    public string Role { get; set; } = "buyer";

    public virtual Admin? Admin { get; set; }

    public virtual Buyer? Buyer { get; set; }

    public virtual Seller? Seller { get; set; }
}
