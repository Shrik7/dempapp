using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api_demo.Properties.Models
{
    public class Designation
    {
        [Key]
        public int DesignationId{get;set;}
        public string DesignationName{get;set;}
        public int DepartmentId{get;set;}
        public Department department{get;set;}
    }
}