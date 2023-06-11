using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NintegesApiFlutter.Models
{
    public class User
    {
        
            public int id { get; set; }
            public String nif { get; set; }
            public String fullName { get; set; }
            public String email { get; set; }
            public String workplaces { get; set; }
            public String token { get; set; }
            public int access { get; set; }

        
    }
}