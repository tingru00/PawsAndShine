using MediatR;
using Microsoft.AspNetCore.Mvc;
using PawsAndShine.Application.Bookings.Commands;
using PawsAndShine.Application.Bookings.Queries;

namespace PawsAndShine.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookingsController : ControllerBase
{
    private readonly IMediator _mediator;
    public BookingsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    public async Task<IActionResult> CreateBooking([FromBody] CreateBookingCommand command)
    {
        var bookingId = await _mediator.Send(command);
        return Ok(bookingId);
    }

    [HttpGet]
    public async Task<IActionResult> GetBookings()
    {
        var bookings = await _mediator.Send(new GetBookingsQuery());
        return Ok(bookings);


    }
}

