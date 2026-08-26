using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using PawsAndShine.Domain.Entities;
using PawsAndShine.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace PawsAndShine.Application.Bookings.Queries
{
    public record GetBookingsQuery : IRequest<List<Booking>>
    {
    }

    public class GetBookingsQueryHandler : IRequestHandler<GetBookingsQuery, List<Booking>>
    {
        private readonly ApplicationDbContext _context;
        public GetBookingsQueryHandler(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<Booking>> Handle(GetBookingsQuery request, CancellationToken cancellationToken)
        {
            return await _context.Bookings
                .Include(b => b.Customer)
                .Include(b => b.ServiceOption)
                .ThenInclude(so => so.Service)
                .ToListAsync(cancellationToken);
        }
    }
}
