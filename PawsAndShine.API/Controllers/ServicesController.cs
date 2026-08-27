using MediatR;
using Microsoft.AspNetCore.Mvc;
using PawsAndShine.Application.Services.Queries;
using PawsAndShine.Application.Services.Commands;
using PawsAndShine.Application.Services.Dtos;

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
        public async Task<IActionResult> CreateService([FromBody] ServiceDto dto)
        {
            var command = new CreateServiceCommand(dto);
            var service = await _mediator.Send(command);
            return Ok(service);
        }

        [HttpGet]
        public async Task<ActionResult<List<ServiceDto>>> GetServices()
        {
            var services = await _mediator.Send(new GetServicesQuery());
            return Ok(services);
        }
    }
}
