using System;
using System.Collections.Generic;
using System.Text;

namespace PawsAndShine.Application.Bookings.Dtos
{
    public class BookingDto
    {
        public int Id { get; set; }
        public string CustomerName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string ServiceName { get; set; } = string.Empty;
        public string ServiceOptionName { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public DateTime BookingDate { get; set; }
        public string Notes { get; set; } = string.Empty;
    }
}
