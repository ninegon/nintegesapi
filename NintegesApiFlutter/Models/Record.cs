using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NintegesApiFlutter.Models
{
    public class Record
    {
            public int type { get; set; }
            public int userId { get; set; }
            public int workplaceId { get; set; }
            public int isSameLocation { get; set; }
            public String note { get; set; }

    }
}