using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductController : BaseApiController
    {
        private readonly DataContext _context;
        public ProductController(DataContext context)
        {
            this._context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts(){
            return await _context.Products.ToListAsync();
            
        }
        [HttpGet("{Id}")]
        public async Task<ActionResult<Product>> GetProduct(int Id){
            return await _context.Products.FindAsync(Id);
        }
    }
}