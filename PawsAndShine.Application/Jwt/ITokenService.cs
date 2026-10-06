using System;
using System.Collections.Generic;
using System.Text;
using PawsAndShine.Domain.Entities;

namespace PawsAndShine.Application.Jwt
{
    public interface ITokenService
    {
        Task<string> CreateTokenAsync(ApplicationUser existinguser);
    }
}
