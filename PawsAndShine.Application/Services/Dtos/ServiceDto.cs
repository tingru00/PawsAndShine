using System;
using System.Collections.Generic;
using System.Text;

namespace PawsAndShine.Application.Services.Dtos
{
    public class ServiceDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<ServiceOptionDto> Options { get; set; } = new List<ServiceOptionDto>();
    }
}
