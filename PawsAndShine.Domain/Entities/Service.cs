namespace PawsAndShine.Domain.Entities
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<ServiceOption> Options { get; set; } = new List<ServiceOption>();

    }
}
