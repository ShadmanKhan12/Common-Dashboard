using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Interfaces
{
    public interface IUserAuthService
    {
        List<User> GetAllUsers();
        User AutheticateUser(string userName, string pwd);
    }
}
