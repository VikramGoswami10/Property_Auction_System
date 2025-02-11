using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.DTO
{
    public class AuctionPropertyDTO
    {
        // Property Fields
        [Required]
        public int Seller_Id { get; set; }

        [Required]
        public int Category_Id { get; set; }

        [Required, MaxLength(50)]
        public string Title { get; set; }

        [Required, MaxLength(50)]
        public string Address { get; set; }

        [Required, MaxLength(100)]
        public string Description { get; set; }

        [Url]
        public string Image { get; set; }  //URL for property image

        // Auction Fields
        [Required]
        public DateTime Start_Time { get; set; }

        [Required]
        public DateTime End_Time { get; set; }

        public string Status { get; set; }
    }

}
