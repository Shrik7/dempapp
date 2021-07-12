using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api_demo.Properties.Models
{
    public class Department
    {
        [Key]
        public int Id{get;set;}

        public int DepartmentCode{get;set;}
        public string DepartmentName{get;set;}
        public List<Designation> designation{get;set;}
    }
}