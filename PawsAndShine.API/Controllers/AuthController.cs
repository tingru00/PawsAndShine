using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PawsAndShine.Application.Bookings.Dtos.Auth;
using PawsAndShine.Domain.Entities;

namespace PawsAndShine.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        // Deklarerar dessa verktyg för att använda i metoderna för inlogg o registering
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration _configuration;

        // Konstruktor för att ta emot verktygen o fälten ovan
        public AuthController(
        UserManager<ApplicationUser> userManager,
        IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            // Kolla om e-post redan finns i databasen
            var existingUser = await _userManager.FindByEmailAsync(dto.Email);
            if (existingUser != null)
            {
                return BadRequest("Användaren finns redan.");
            }

            // Spara ett nytt användarobjekt från DTO data
            var newUser = new ApplicationUser
            {
                UserName = dto.Email,
                Email = dto.Email,
                FirstName = dto.FirstName,
                LastName = dto.LastName
            };

            // Spara användaren i databasen och kryptera lösenord
            var result = await _userManager.CreateAsync(newUser, dto.Password);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            // Svar tillbaka till klienten
            return Ok("Användaren har skapats!");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            // Leta upp användaren i databasen med hjälp av e-post
            var existinguser = await _userManager.FindByEmailAsync(dto.Email);
            //Om användaren inte finns skrivs ett felmeddelande
            if (existinguser == null)
            {
                return Unauthorized("Felaktig e-post eller lösenord!");
            }

            // Lösenords-check
            bool IsPassWordValid = await _userManager.CheckPasswordAsync(existinguser, dto.PassWord);
            if (!IsPassWordValid)
            {
                return Unauthorized("Felaktig e-post eller lösenord.");
            }

            return Ok("Du är inloggad");

        }
    }
}

