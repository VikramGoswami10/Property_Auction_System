using Backend.DTO;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyAuctionController : ControllerBase
    {
        private readonly PropertyAuctionContext _context;
        public PropertyAuctionController (PropertyAuctionContext context)
        {
            _context = context;
        }
        [HttpPost("create")]
        public async Task<IActionResult> CreateProperty([FromBody] PropertyDTO propertyDto)
        {
            if (propertyDto == null)
                return BadRequest("Invalid property data.");
            try
            {
                var property = new Property
                {
                    SellerId = propertyDto.SellerId,
                    CategoryId = propertyDto.CategoryId,
                    Title = propertyDto.Title,
                    Image = propertyDto.Image,
                    Address = propertyDto.Address,
                    Description = propertyDto.Description
                };
                _context.Properties.Add(property);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetProperty), new { id = property.PropertyId }, new { message = "Property created successfully", propertyId = property.PropertyId });
            }
            catch (Exception ex)
            {
                // Log the exception (use a logging framework here)
                Console.WriteLine(ex); // Replace with proper logging
                return StatusCode(500, new { error = "Error creating property", details = ex.Message });
            }
        }
        // Get All Properties
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Property>>> GetProperties()
        {
            var properties = await _context.Properties.ToListAsync();
            return Ok(properties);
        }

        // Get Property By Id
        [HttpGet("{id}")]
        public async Task<ActionResult<Property>> GetProperty(int id)
        {
            var property = await _context.Properties.FindAsync(id);
            if (property == null)
                return NotFound();
            return Ok(property);
        }
    }
}
