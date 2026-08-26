using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using PawsAndShine.Domain.Entities;
using PawsAndShine.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace PawsAndShine.Application.Services.Commands
{
    public record CreateServiceCommand : IRequest<int>
    {
        public string Name { get; init; } = string.Empty;
        public string Description { get; init; } = string.Empty;
    }

    public class CreateServiceCommandHandler : IRequestHandler<CreateServiceCommand, int>
    {
        private readonly ApplicationDbContext _context;
        public CreateServiceCommandHandler(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<int> Handle(CreateServiceCommand request, CancellationToken cancellationToken)
        {
            var service = new Service
            {
                Name = request.Name,
                Description = request.Description
            };
            _context.Services.Add(service);
            await _context.SaveChangesAsync(cancellationToken);
            return service.Id;
        }
    }

}
