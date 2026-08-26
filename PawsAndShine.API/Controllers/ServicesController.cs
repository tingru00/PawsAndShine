using Microsoft.AspNetCore.Mvc;
using MediatR;
using PawsAndShine.Application.Services.Queries;

namespace PawsAndShine.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ServicesController : ControllerBase
    {
       private readonly IMediator _mediator;
        public ServicesController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet]
        public async Task<IActionResult> GetServices()
        {
            var services = await _mediator.Send(new GetServicesQuery());
            return Ok(services);
        }
    }
}
