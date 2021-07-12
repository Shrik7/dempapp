using Microsoft.EntityFrameworkCore;

namespace Api_demo.Properties.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions options) : base(options)
        { }

        public DbSet<Employee> employees { get; set; }
        public DbSet<Department> department {get;set;}
        public DbSet<Designation> designation{get;set;}
    }
}