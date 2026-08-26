using MediatR;
using Microsoft.AspNetCore.Mvc;
using PawsAndShine.Application.Services.Queries;
using PawsAndShine.Application.Services.Commands;

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
        [HttpPost]
        public async Task<IActionResult> CreateService([FromBody] CreateServiceCommand command)
        {
            var serviceId = await _mediator.Send(command);
            return Ok(serviceId);
        }

        [HttpGet]
        public async Task<IActionResult> GetServices()
        {
            var services = await _mediator.Send(new GetServicesQuery());
            return Ok(services);
        }
    }
}
