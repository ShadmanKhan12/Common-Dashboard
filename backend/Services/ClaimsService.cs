using backend.Interfaces;
using backend.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public class ClaimsService : IClaimsService
    {
        private readonly IMongoCollection<Claim> claim;

        public ClaimsService(IDbConfiguration settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            claim = database.GetCollection<Claim>("Claims");
        }
        public Claim Create(Claim newClaim)
        {
            claim.InsertOne(newClaim);
            return newClaim;
        }
        public IList<Claim> GetAll() =>
            claim.Find(sub => true).ToList();

        public void Update(Claim data)
        {
            claim.ReplaceOne(sub => sub.Id == data.Id, data);
        }

        public void Delete(string id)
        {
            claim.DeleteOne(sub => sub.Id == id);
        }
    }
}
