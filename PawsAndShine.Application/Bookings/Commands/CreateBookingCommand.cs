using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using PawsAndShine.Domain.Entities;
using PawsAndShine.Infrastructure.Data;
using PawsAndShine.Application.Bookings.Dtos;
using Microsoft.EntityFrameworkCore;

namespace PawsAndShine.Application.Bookings.Commands
{
    public record CreateBookingCommand(CreateBookingDto Dto) : IRequest<BookingDto>;
    
    public class CreateBookingCommandHandler : IRequestHandler<CreateBookingCommand, BookingDto>
    {
        private readonly ApplicationDbContext _context;
        public CreateBookingCommandHandler(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<BookingDto> Handle(CreateBookingCommand request, CancellationToken cancellationToken)
        {
            var customer = new Customer
            {
                FirstName = request.Dto.FirstName,
                LastName = request.Dto.LastName,
                Email = request.Dto.Email,
                PhoneNumber = request.Dto.PhoneNumber
            };

            var booking = new Booking
            {
                BookingDate = request.Dto.BookingDate,
                Notes = request.Dto.Notes,
                Customer = customer, 
                ServiceOptionId = request.Dto.ServiceOptionId
            };

            var option = await _context.ServiceOptions
                .FirstOrDefaultAsync(so => so.Id == booking.ServiceOptionId, cancellationToken);
            if (option == null)
            {
                throw new Exception("Den valda tjänsten hittades inte.");
            }

            var newStart = request.Dto.BookingDate;
            var newEnd = newStart.AddMinutes(option.DurationInMinutes);

            var isOverlapping = await _context.Bookings
                .AnyAsync(b =>
                    (newStart < b.BookingDate.AddMinutes(b.ServiceOption.DurationInMinutes)) &&
                    (newEnd > b.BookingDate), cancellationToken);
            if (isOverlapping)
            {
                throw new Exception("Den valda tiden är redan bokad. Vänligen välj en annan tid.");
            }


            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync(cancellationToken);

            var serviceOption = await _context.ServiceOptions
                .Include(so => so.Service)
                .FirstOrDefaultAsync(so => so.Id == booking.ServiceOptionId, cancellationToken);

            
            return new BookingDto
            {
                Id = booking.Id,
                CustomerName = $"{customer.FirstName} {customer.LastName}",
                Email = customer.Email,
                ServiceName = serviceOption?.Service?.Name ?? string.Empty,
                ServiceOptionName = serviceOption?.Name ?? string.Empty,
                Price = serviceOption?.Price ?? 0,
                BookingDate = booking.BookingDate,
                Notes = booking.Notes
            };
        }
    }
     
}

