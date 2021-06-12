using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserAuthService _userService;

        public UsersController(IUserAuthService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User user)
        {
            var users = _userService.AutheticateUser(user.UserName, user.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(users);
        }
        [Authorize(Roles ="User")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users =  _userService.GetAllUsers();
            return Ok(users);
        }
    }
}
