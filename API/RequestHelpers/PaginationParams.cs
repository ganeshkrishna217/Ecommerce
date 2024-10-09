using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace API.RequestHelpers
{
    public class PaginationParams
    {
        private const int _MaxPageSize = 50;

        public int PageNumber {get ; set ;} = 1;
        private int _pageSize = 6;

        public int PageSize{
            get => _pageSize;
            set => _pageSize = value > _MaxPageSize ? _MaxPageSize : value;
        }

    }
}