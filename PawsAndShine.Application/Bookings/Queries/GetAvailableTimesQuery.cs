using MediatR;
using Microsoft.EntityFrameworkCore;
using PawsAndShine.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace PawsAndShine.Application.Bookings.Queries
{
    public record GetAvailableTimesQuery(DateTime Date, int ServiceOptionId) : IRequest<List<string>>
    {
    }

    public class GetAvailableTimesQueryHandler
    : IRequestHandler<GetAvailableTimesQuery, List<string>>
    {
        private readonly ApplicationDbContext _context;
        public GetAvailableTimesQueryHandler(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<string>> Handle(
        GetAvailableTimesQuery request,
        CancellationToken cancellationToken)
        {
            var availableTimes = new List<string>();
            var option = await _context.ServiceOptions
        .FirstOrDefaultAsync(o => o.Id == request.ServiceOptionId, cancellationToken);

            if (option == null) throw new Exception("Tjänsten hittades inte.");

            var existingBookings = await _context.Bookings
                .Include(b => b.ServiceOption)
                .Where(b => b.BookingDate.Date == request.Date.Date)
                .ToListAsync(cancellationToken);

            var startTime = request.Date.Date.AddHours(8);
            var endTime = request.Date.Date.AddHours(17);
            var duration = option.DurationInMinutes;
            var timeSlotInterval = 30;
            var currentTime = startTime;

            while (currentTime.AddMinutes(duration) <= endTime)
            {
                var slotEnd = currentTime.AddMinutes(duration);

                bool isOccupied = existingBookings.Any(b =>
                {
                    var bStart = b.BookingDate;
                    var bEnd = b.BookingDate.AddMinutes(b.ServiceOption.DurationInMinutes);

                    return currentTime < bEnd && slotEnd > bStart;
                });

                if (!isOccupied)
                {
                    availableTimes.Add(currentTime.ToString("HH:mm"));
                }

                currentTime = currentTime.AddMinutes(timeSlotInterval);
            }
            return availableTimes;
        }
    }
}
