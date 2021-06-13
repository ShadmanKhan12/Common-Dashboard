using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Claim
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public int UserId { get; set; }
        public string UserDept { get; set; }
        public string ResourceLink { get; set; }
        public int ResourcePrice { get; set; }
        public bool IsApproved { get; set; }
    }
}
