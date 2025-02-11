using System.ComponentModel.DataAnnotations;

namespace Backend.DTO
{
    public class AuctionDTO
    {
        public int PropertyId { get; set; }  // Required to link with Property

        [Required]
        public DateTime StartTime { get; set; }

        [Required]
        public DateTime EndTime { get; set; }
    }
}
