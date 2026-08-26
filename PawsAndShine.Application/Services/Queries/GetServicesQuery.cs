using MediatR;
using PawsAndShine.Infrastructure.Data;
using PawsAndShine.Domain.Entities;
using Microsoft.EntityFrameworkCore;


namespace PawsAndShine.Application.Services.Queries
{
    public record GetServicesQuery : IRequest<List<Service>>
    {  
    }

    public class GetServicesQueryHandler : IRequestHandler<GetServicesQuery, List<Service>>
    {
        private readonly ApplicationDbContext _context;
        public GetServicesQueryHandler(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<Service>> Handle(GetServicesQuery request, CancellationToken cancellationToken)
        {
            return await _context.Services
                .Include(s => s.Options)
                .ToListAsync(cancellationToken);
        }
    }
}
