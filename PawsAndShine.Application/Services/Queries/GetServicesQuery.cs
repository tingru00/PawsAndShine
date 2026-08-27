using MediatR;
using PawsAndShine.Infrastructure.Data;
using PawsAndShine.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using PawsAndShine.Application.Services.Dtos;


namespace PawsAndShine.Application.Services.Queries
{
    public record GetServicesQuery : IRequest<List<ServiceDto>>
    {  
    }

    public class GetServicesQueryHandler : IRequestHandler<GetServicesQuery, List<ServiceDto>>
    {
        private readonly ApplicationDbContext _context;
        public GetServicesQueryHandler(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<ServiceDto>> Handle(GetServicesQuery request, CancellationToken cancellationToken)
        {
            return await _context.Services
                .Select(s=> new ServiceDto
                {
                    Id = s.Id,
                    Name = s.Name,
                    Description = s.Description,
                    Options = s.Options.Select(o => new ServiceOptionDto
                    {
                        Id = o.Id,
                        Name = o.Name,
                        Price = o.Price
                    }).ToList()
                })
         .ToListAsync(cancellationToken);
        }
        }
    }

