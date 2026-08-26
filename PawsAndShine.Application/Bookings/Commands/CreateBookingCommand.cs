using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using PawsAndShine.Domain.Entities;
using PawsAndShine.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace PawsAndShine.Application.Bookings.Commands
{
    public record CreateBookingCommand : IRequest<int>
    {
        public DateTime BookingDate { get; init; }
        public string Notes { get; init; } = string.Empty;
        public bool IsConfirmed { get; init; }
        public int CustomerId { get; init; }
        public int ServiceOptionId { get; init; }
    }

    public class CreateBookingCommandHandler : IRequestHandler<CreateBookingCommand, int>
    {
        private readonly ApplicationDbContext _context;
        public CreateBookingCommandHandler(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<int> Handle(CreateBookingCommand request, CancellationToken cancellationToken)
        {
            var booking = new Booking
            {
                BookingDate = request.BookingDate,
                Notes = request.Notes,
                IsConfirmed = request.IsConfirmed,
                CustomerId = request.CustomerId,
                ServiceOptionId = request.ServiceOptionId
            };
            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync(cancellationToken);
            return booking.Id;
        }
    }
     
}

