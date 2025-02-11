using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BiddingHistoriesController : ControllerBase
    {
        private readonly PropertyAuctionContext _context;

        public BiddingHistoriesController(PropertyAuctionContext context)
        {
            _context = context;
        }

        // GET: api/BiddingHistories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BiddingHistory>>> GetBiddingHistories()
        {
            return await _context.BiddingHistories.ToListAsync();
        }

        // GET: api/BiddingHistories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BiddingHistory>> GetBiddingHistory(int id)
        {
            var biddingHistory = await _context.BiddingHistories.FindAsync(id);

            if (biddingHistory == null)
            {
                return NotFound();
            }

            return biddingHistory;
        }

        // PUT: api/BiddingHistories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBiddingHistory(int id, BiddingHistory biddingHistory)
        {
            if (id != biddingHistory.BiddinghistoryId)
            {
                return BadRequest();
            }

            _context.Entry(biddingHistory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BiddingHistoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BiddingHistories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BiddingHistory>> PostBiddingHistory(BiddingHistory biddingHistory)
        {
            _context.BiddingHistories.Add(biddingHistory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBiddingHistory", new { id = biddingHistory.BiddinghistoryId }, biddingHistory);
        }

        // DELETE: api/BiddingHistories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBiddingHistory(int id)
        {
            var biddingHistory = await _context.BiddingHistories.FindAsync(id);
            if (biddingHistory == null)
            {
                return NotFound();
            }

            _context.BiddingHistories.Remove(biddingHistory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BiddingHistoryExists(int id)
        {
            return _context.BiddingHistories.Any(e => e.BiddinghistoryId == id);
        }
    }
}
