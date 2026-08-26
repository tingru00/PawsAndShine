using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using PawsAndShine.Domain.Entities;
using PawsAndShine.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using PawsAndShine.Application.Bookings.Dtos;

namespace PawsAndShine.Application.Bookings.Queries
{
    public record GetBookingsQuery : IRequest<List<BookingDto>>
    {
    }

    public class GetBookingsQueryHandler : IRequestHandler<GetBookingsQuery, List<BookingDto>>
    {
        private readonly ApplicationDbContext _context;
        public GetBookingsQueryHandler(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<BookingDto>> Handle(GetBookingsQuery request, CancellationToken cancellationToken)
        {
            return await _context.Bookings
               .Select(b => new BookingDto
               {
                   Id = b.Id,
                   CustomerName = $"{b.Customer.FirstName} {b.Customer.LastName}",
                   Email = b.Customer.Email,
                   ServiceName = b.ServiceOption.Service.Name,
                   ServiceOptionName = b.ServiceOption.Name,
                   Price = b.ServiceOption.Price,
                   BookingDate = b.BookingDate,
                   Notes = b.Notes
               })
               .ToListAsync(cancellationToken);
        }
    }
}
