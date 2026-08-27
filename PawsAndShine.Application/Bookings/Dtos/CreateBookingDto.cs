using System;
using System.Collections.Generic;
using System.Text;

namespace PawsAndShine.Application.Bookings.Dtos
{
    public class CreateBookingDto
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public int ServiceOptionId { get; set; }
        public DateTime BookingDate { get; set; }
        public string Notes { get; set; } = string.Empty;
    }
}
