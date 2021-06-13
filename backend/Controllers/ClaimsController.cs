using backend.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClaimsController : ControllerBase
    {
        private readonly IClaimsService _claimService;
        public ClaimsController(IClaimsService claimService)
        {
            _claimService = claimService;
        }
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IList<Claim> Get()
        {
            var claims = _claimService.GetAll();
            return claims;
        }

        [Authorize(Roles = "User")]
        [HttpPost]
        public void Post([FromBody] Claim claim)
        {
            _claimService.Create(claim);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut]
        public void Put([FromBody] Claim claim)
        {
            _claimService.Update(claim);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _claimService.Delete(id);
        }
    }
}
