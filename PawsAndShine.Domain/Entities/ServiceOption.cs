using System;
using System.Collections.Generic;
using System.Text;

namespace PawsAndShine.Domain.Entities
{
    public class ServiceOption
    {
        public int Id { get; set; }
        public int ServiceId { get; set; }
        public Service Service { get; set; } = null!;
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int DurationInMinutes { get; set; }
        public decimal Price { get; set; }
    }
}
