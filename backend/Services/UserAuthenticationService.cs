using backend.Interfaces;
using backend.Models;
using backend.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public class UserAuthenticationService : IUserAuthService
    {
        private List<User> _users = new List<User>
        {
            new User{ UserName = "user", Password = "1234", Role="User" },
            new User{ UserName = "admin", Password = "1234", Role="Admin" }
        };

        public List<User> GetAllUsers()
        {
            return _users;
        }

        public User AutheticateUser(string userName,string password)
        {
            var user = _users.Find(item => item.UserName == userName && item.Password == password);
            if(user != null)
            {
                string token = GenerateToken(user);
                var userData = new User()
                {
                    AccessToken = token,
                    Role = user.Role,
                    UserName = user.UserName,
                    Password = user.Password
                };

                return userData;
            }

            else
            {
                return null;
            }
        }

        public string GenerateToken(User user)
        {
            var plainText = $"{user.UserName}:{user.Password}";
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }
    }
}
