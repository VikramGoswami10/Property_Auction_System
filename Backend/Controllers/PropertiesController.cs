using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Backend.DTO;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertiesController : ControllerBase
    {
        private readonly PropertyAuctionContext _context;

        public PropertiesController(PropertyAuctionContext context)
        {
            _context = context;
        }

        // Create Property
        [HttpPost("create")]
        public async Task<IActionResult> CreateProperty([FromBody] PropertyDTO propertyDto)
        {
            if (propertyDto == null)
                return BadRequest("Invalid property data.");

            if (propertyDto == null) return BadRequest("Invalid property data");

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

                return Ok(new { message = "Property created successfully", propertyId = property.PropertyId });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "Error creating property", details = ex.Message });
            }
        }

        // Get All Properties
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Property>>> GetProperties()
        {
            return await _context.Properties.ToListAsync();
        }

        // Get Property By Id
        [HttpGet("{id}")]
        public async Task<ActionResult<Property>> GetProperty(int id)
        {
            var property = await _context.Properties.FindAsync(id);
            if (property == null)
                return NotFound();
            return property;
        }
    }
}
