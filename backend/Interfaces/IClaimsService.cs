using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Interfaces
{
    public interface IClaimsService
    {
        IList<Claim> GetAll();
        Claim Create(Claim claim);
        void Update(Claim claim);
        void Delete(string id);
    }
}
