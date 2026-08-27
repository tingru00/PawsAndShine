using System;
using System.Collections.Generic;
using System.Text;

namespace PawsAndShine.Application.Services.Dtos
{
    public class CreateServiceDto
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<CreateServiceOptionDto> Options { get; set; } = new List<CreateServiceOptionDto>();
    }
}
