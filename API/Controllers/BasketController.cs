using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly DataContext _context;
        public BasketController(DataContext context){
            _context = context;
        }
        private async Task<Basket> RetriveBasket(string buyerId)
        {
            if(string.IsNullOrEmpty(buyerId)){
                Response.Cookies.Delete("buyerId");
                return null;
            }
            return await _context.Baskets.Include(i => i.BasketItems).ThenInclude(p => p.Product)
                        .FirstOrDefaultAsync(x => x.BuyerId == buyerId);
        }
        private Basket CreateBasket(){
            var buyerId = User.Identity?.Name;
            if(string.IsNullOrEmpty(buyerId)){
                buyerId = Guid.NewGuid().ToString();
                var cookieOptions = new CookieOptions{IsEssential = true, Expires=DateTime.Now.AddDays(14)};
                Response.Cookies.Append("buyerId", buyerId, cookieOptions);
            }    
            var basket = new Basket{BuyerId = buyerId};
            _context.Baskets.Add(basket);
            return basket;
        }
        private string GetBuyerId(){
            return User.Identity?.Name ?? Request.Cookies["buyerId"];
        }

        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            Basket basket = await RetriveBasket(GetBuyerId());

            if (basket == null) return NotFound();
            return basket.MapBasketToDto();
        }

        

        [HttpPost]
        public async Task<ActionResult<BasketDto>> AddBasketItem(int productId, int quantity){
            var basket = await RetriveBasket(GetBuyerId());
            if(basket == null) basket = CreateBasket();

            var product = await _context.Products.FindAsync(productId);
            if(product == null) return NotFound();

            basket.AddBasketItem(product, quantity);

            var result = await _context.SaveChangesAsync() > 0;

            if(result) return CreatedAtRoute("GetBasket", basket.MapBasketToDto());
            return BadRequest(new ProblemDetails{Title = "Problem in saving item to basket"});
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteBasketItem(int productId, int quantity){
            var basket = await RetriveBasket(GetBuyerId());
            if(basket == null) return NotFound();
            basket.RemoveBasketItem(productId, quantity);
            var result = await _context.SaveChangesAsync() > 0;
            
            if(result) return Ok();
            return BadRequest(new ProblemDetails{Title = "Problem in Deleting the item from basket"});
        }
    }
}