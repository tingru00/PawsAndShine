using System;
using System.Collections.Generic;
using System.Text;

namespace PawsAndShine.Application.Services.Dtos
{
    public class CreateServiceOptionDto
    {
        public string Name { get; set; } = string.Empty;
        public int DurationInMinutes { get; set; }
        public decimal Price { get; set; }
    }
}
