using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using System.Threading.Tasks;
using BCrypt.Net;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserinfoesController : ControllerBase
    {
        private readonly PropertyAuctionContext _context;

        public UserinfoesController(PropertyAuctionContext context)
        {
            _context = context;
        }

        // REGISTER USER
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Userinfo user)
        {
            if (string.IsNullOrWhiteSpace(user.Email) || string.IsNullOrWhiteSpace(user.Password))
            {
                return BadRequest(new { message = "Email and password are required." });
            }

            if (await _context.Userinfos.AnyAsync(u => u.Email == user.Email))
            {
                return BadRequest(new { message = "Email already exists." });
            }

            // Hash the password using BCrypt
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

            try
            {
                _context.Userinfos.Add(user);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                return StatusCode(500, new { message = "An error occurred while saving the user." });
            }

            return Ok(new { message = "User  registered successfully." });
        }

        // LOGIN USER (Session-based)
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _context.Userinfos.FirstOrDefaultAsync(u => u.Email == request.Email);

            if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.Password))
            {
                return Unauthorized(new { message = "Invalid credentials" });
            }

            if (HttpContext.Session != null)
            {
                HttpContext.Session.SetInt32("User Id", user.UId);
                HttpContext.Session.SetString("User Email", user.Email);
                HttpContext.Session.SetString("User Role", user.Role);
            }   

            return Ok(new { userId = user.UId, name = user.Name, email = user.Email, role = user.Role });
        }

        // LOGOUT USER
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete(".AspNetCore.Session");
            Response.Cookies.Delete("AuthToken"); // If using JWT or custom cookies
            return Ok(new { message = "Logged out successfully" });
        }

        // GET CURRENT LOGGED-IN USER
        [HttpGet("current-user")]
        public IActionResult GetCurrentUser()
        {
            var userId = HttpContext.Session.GetInt32("User Id");
            var userEmail = HttpContext.Session.GetString("User Email");
            var userRole = HttpContext.Session.GetString("User Role");

            if (userId == null || userEmail == null || userRole == null)
            {
                return Unauthorized(new { message = "User not logged in" });
            }

            return Ok(new { userId, userEmail, userRole });
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}