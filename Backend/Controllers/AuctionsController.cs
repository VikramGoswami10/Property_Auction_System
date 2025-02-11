using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Backend.DTO;
using System;
using System.IO;
using System.Threading.Tasks;
using Azure.Core;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionsController : ControllerBase
    {
        private readonly PropertyAuctionContext _context;

        public AuctionsController(PropertyAuctionContext context)
        {
            _context = context;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateAuction([FromBody] AuctionDTO model)
        {
            try
            {
                if (model == null)
                    return BadRequest("Invalid auction data");
                // Check if the property exists
                var propertyExists = await _context.Properties.AnyAsync(p => p.PropertyId == model.PropertyId);
                if (!propertyExists)
                {
                    return BadRequest("Property does not exist.");
                }
                var auction = new Auction
                {
                    PropertyId = model.PropertyId,
                    StartTime = model.StartTime,
                    EndTime = model.EndTime,
                    Status = "ongoing",
                };
                _context.Auctions.Add(auction);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Auction created successfully!", auctionId = auction.AuctionId });
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine(ex); // Replace with proper logging
                return StatusCode(500, new { error = "Error creating auction", details = ex.Message });
            }
        }
    }
}
