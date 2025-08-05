using Microsoft.AspNetCore.Mvc;

namespace PortfolioAPI.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProjetosController : ControllerBase
  {
    [HttpGet]
    public IActionResult Get()
    {
      var projetos = new[]
      {
        new { Id = 1, Nome = "Portfólio React + .NET", Descricao = "Primeiro projeto fullstack" },
        new { Id = 2, Nome = "API CRUD", Descricao = "Exemplo de CRUD em .NET" }
      };

      return Ok(projetos);
    }
  }
}
