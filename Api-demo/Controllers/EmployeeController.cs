using Api_demo.Properties.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using Api_demo.Properties.Models;

namespace Api_demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private EmployeeContext _employeeContext;

        public EmployeeController(EmployeeContext context)
        {
            _employeeContext = context;
        }

        [HttpPost]
        [Route("post")]
        public async Task<ActionResult> Post([FromBody]Employee employee)
        {
            if (employee == null)
            {
                return NotFound("Student data is not supplied");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _employeeContext.employees.AddAsync(employee);
            await _employeeContext.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpGet]
        [Route("get")]
        public ActionResult<IEnumerable<Department>> GetDept()
        {
            return _employeeContext.department.ToList();
        }

        [HttpGet]
        [Route("getDes")]
        public ActionResult<IEnumerable<Designation>> GetDesignation()
        {
            return _employeeContext.designation.ToList();
        }

        [HttpGet]
        [Route("getbyid/{id}")]
        public ActionResult<Designation> GetById(int id)
        {
            if (id <= 0)
            {
                return NotFound("Employee id must be higher than zero");
            }
            Designation designation = _employeeContext.designation.FirstOrDefault(s => s.DesignationId == id);
            if (designation == null)
            {
                return NotFound("Employee not found");
            }
            return Ok(designation);
        }

        [HttpGet]
        [Route("getbydeptid/{id}")]
        public ActionResult<Designation> GetByDeptId(int id)
        {
            if (id <= 0)
            {
                return NotFound("department id must be higher than zero");
            }
            
            List<Designation> designations=_employeeContext.designation.Where(x=>x.DepartmentId==id).ToList<Designation>();

            if (designations == null)
            {
                return NotFound("department not found");
            }
            return Ok(designations);
        }
    }
}