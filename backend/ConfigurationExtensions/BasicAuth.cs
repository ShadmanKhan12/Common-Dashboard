using backend.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace backend.ConfigurationExtensions
{
    public class BasicAuth : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        private readonly IUserAuthService _userAuthService;

        public BasicAuth(UrlEncoder urlEncoder, IUserAuthService userAuthService ,
            IOptionsMonitor<AuthenticationSchemeOptions> options,
            ILoggerFactory logger,
            ISystemClock clock) : base(options, logger, urlEncoder,clock)
        {
            _userAuthService = userAuthService;
        }

        protected override async Task<AuthenticateResult>  HandleAuthenticateAsync()
        {
            var endpoint = Context.GetEndpoint();
            if (endpoint?.Metadata?.GetMetadata<IAllowAnonymous>() != null)
                return AuthenticateResult.NoResult();

            if (!Request.Headers.ContainsKey("Authorization"))
                return AuthenticateResult.Fail("Missing Authorization Header");

            User user = null;
            try
            {
                var authHeader = AuthenticationHeaderValue.Parse(Request.Headers["Authorization"]);
                var credentialBytes = Convert.FromBase64String(authHeader.Parameter);
                var credentials = Encoding.UTF8.GetString(credentialBytes).Split(new[] { ':' }, 2);
                var username = credentials[0];
                var password = credentials[1];
                user = this._userAuthService.AutheticateUser(username, password);
            }
            catch
            {
                return AuthenticateResult.Fail("Invalid Authorization Header");
            }

            if (user == null)
                return AuthenticateResult.Fail("Invalid Username or Password");

            var claims = new[] {
                new System.Security.Claims.Claim(ClaimTypes.Name, user.UserName),
                new System.Security.Claims.Claim(ClaimTypes.Role, user.Role)
        };
            var identity = new ClaimsIdentity(claims, Scheme.Name);
            var principal = new ClaimsPrincipal(identity);
            var ticket = new AuthenticationTicket(principal, Scheme.Name);

            return AuthenticateResult.Success(ticket);

        }
    }
}
