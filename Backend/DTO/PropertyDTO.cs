using System.ComponentModel.DataAnnotations;

namespace Backend.DTO
{
    public class PropertyDTO
    {
        [Required]
        public int SellerId { get; set; }

        [Required]
        public int CategoryId { get; set; }

        [Required]
        [StringLength(100)]
        public string Title { get; set; }
        public string Image { get; set; }
        [Required]
        public string Address { get; set; }
        public string Description { get; set; }
        
    }
}
