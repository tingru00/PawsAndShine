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
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Booking> Bookings { get; set; } 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

 
            modelBuilder.Entity<ServiceOption>()
                .Property(s => s.Price)
                .HasColumnType("decimal(18,2)");
        }

    }
}
