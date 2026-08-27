using MediatR;
using Microsoft.AspNetCore.Mvc;
using PawsAndShine.Application.Bookings.Commands;
using PawsAndShine.Application.Bookings.Dtos;
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
    public async Task<IActionResult> CreateBooking([FromBody] CreateBookingDto dto)
    {
        var command = new CreateBookingCommand(dto);
        var booking = await _mediator.Send(command);
        return Ok(booking);
    }

    [HttpGet]
    public async Task<ActionResult<List<BookingDto>>> GetBookings()
    {
        var bookings = await _mediator.Send(new GetBookingsQuery());
        return Ok(bookings);


    }
}

