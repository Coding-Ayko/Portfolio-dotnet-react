using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Models;

namespace PortfolioAPI.Controllers {
  [ApiController]
  [Route("api/[controller]")]
  public class ProjectsController : ControllerBase {
    private static readonly List<Project> Projects = new() {
      new Project{ Id = 1, TitleProject = "Portfólio React + .NET", Description = "Primeiro projeto fullstack" },
      new Project { Id = 2, TitleProject = "API CRUD", Description = "Exemplo de CRUD em .NET" }
    };

    [HttpGet]
    public IActionResult Get() {
      return Ok(Projects);
    }
    
    [HttpGet("{id}")]
    public IActionResult GetById(int id) {
      var project = Projects.FirstOrDefault(p => p.Id == id);
      if (project == null) return NotFound();
      return Ok(project);
    }
  }
}
