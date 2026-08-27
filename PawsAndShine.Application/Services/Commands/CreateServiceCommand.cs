using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using PawsAndShine.Domain.Entities;
using PawsAndShine.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using PawsAndShine.Application.Services.Dtos;

namespace PawsAndShine.Application.Services.Commands
{
    public record CreateServiceCommand (CreateServiceDto Dto): IRequest<ServiceDto>;

    public class CreateServiceCommandHandler : IRequestHandler<CreateServiceCommand, ServiceDto>
    {
        private readonly ApplicationDbContext _context;
        public CreateServiceCommandHandler(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<ServiceDto> Handle(CreateServiceCommand request, CancellationToken cancellationToken)
        {
            var service = new Service
            {
                Name = request.Dto.Name,
                Description = request.Dto.Description,
                Options = request.Dto.Options.Select(o => new ServiceOption
                {
                    Name = o.Name,
                    Price = o.Price,
                    DurationInMinutes = o.DurationInMinutes
                }).ToList()
            };
            _context.Services.Add(service);
            await _context.SaveChangesAsync(cancellationToken);

            return new ServiceDto
            {
                Id = service.Id,
                Name = service.Name,
                Description = service.Description,
                Options = service.Options.Select(o => new ServiceOptionDto
                {
                    Id = o.Id,
                    Name = o.Name,
                    Price = o.Price,
                    DurationInMinutes = o.DurationInMinutes
                }).ToList()
            };
        }
    }

}
