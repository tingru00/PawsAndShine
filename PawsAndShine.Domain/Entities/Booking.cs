using System;
using System.Collections.Generic;
using System.Text;

namespace PawsAndShine.Domain.Entities
{
    public class Booking
    {
        public int Id { get; set; }
        public DateTime BookingDate { get; set; }
        public string Notes { get; set; } = string.Empty;
        public bool IsConfirmed { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; } = null!;
        public int ServiceOptionId { get; set; }
        public ServiceOption ServiceOption { get; set; } = null!;
    }
}
