using Microsoft.EntityFrameworkCore;
using PawsAndShine.Domain.Entities;

namespace PawsAndShine.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        
        public DbSet<Service> Services { get; set; }
        public DbSet<ServiceOption> ServiceOptions { get; set; }

    }
}
