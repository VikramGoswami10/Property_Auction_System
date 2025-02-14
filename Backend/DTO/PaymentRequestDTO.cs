namespace Backend.DTO
{
    public class PaymentRequestDTO
    {
        public int Amount { get; set; } // Amount in paise (INR * 100)
        public string Currency { get; set; } = "INR";      
    }
}
