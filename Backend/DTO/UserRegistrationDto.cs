namespace Backend.DTO
{
    public class UserRegistrationDto
    {
        public string Name { get; set; }   // User's name
        public string Email { get; set; }  // User's email
        public string Password { get; set; }  // User's password
        public string Role { get; set; }   // Role (buyer, seller, admin)
    }
}
