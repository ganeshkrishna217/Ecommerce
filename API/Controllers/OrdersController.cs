using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Entities.OrderAggregates;
using API.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class OrdersController : BaseApiController
    {
        private readonly DataContext _context ;
        public OrdersController(DataContext context){
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<OrderDto>>> GetOrders(){
            return await _context.Orders
                                  .ProjectOrderToOrderDto()
                                  .Where(x => x.BuyerId == User.Identity.Name)
                                  .ToListAsync();
        }
        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<ActionResult<OrderDto>> GetOrder(int id){
            return await _context.Orders
                                    .ProjectOrderToOrderDto()
                                    .Where(x => x.BuyerId == User.Identity.Name && x.Id == id)
                                    .FirstOrDefaultAsync();
        }
        [HttpPost]
        public async Task<ActionResult<int>> CreateOrder(CreateOrderDto orderDto){
            var basket = await _context.Baskets
                 .RetrieveBasketWithItems(User.Identity.Name)
                 .FirstOrDefaultAsync();

            if(basket == null){
                return BadRequest(new ProblemDetails{Title = "Could not locate basket"});
            }
            var items = new List<OrderItem>();
            foreach(var item in basket.BasketItems){
                var productItem = await _context.Products.FindAsync(item.ProductId);
                var itemOrdered = new ProductItemOrdered{
                    ProductId = productItem.Id,
                    Name = productItem.Name,
                    PictureUrl = productItem.PictureUrl,
                };
                var orderItem = new OrderItem {
                    ItemOrdered = itemOrdered,
                    Price = productItem.Price,
                    Quantity = item.Quantity,
                };
                items.Add(orderItem);
                productItem.QuantityInStock -= item.Quantity;
            }
            var subtotal = items.Sum(x => x.Price * x.Quantity);
            var deliveryFee = subtotal == 0 ? 0 : subtotal < 100000 ? 5000 + subtotal / 10 : 0;

            var order = new Order {
                OrderItems = items,
                BuyerId = User.Identity.Name,
                ShippingAddress = orderDto.ShippingAddress,
                SubTotal = subtotal,
                DeliveryFee = deliveryFee,
                PaymentIntentId = basket.PaymentIntentId,
            };
            _context.Orders.Add(order);
            _context.Baskets.Remove(basket);
            if(orderDto.SaveAddress){
                var user = await _context.Users
                           .Include(a => a.Address)
                           .FirstOrDefaultAsync(x => x.UserName == User.Identity.Name);
                var adrress = new UserAddress{
                    FullName = orderDto.ShippingAddress.FullName,
                    Address1 = orderDto.ShippingAddress.Address1,
                    Address2 = orderDto.ShippingAddress.Address2,
                    City = orderDto.ShippingAddress.City,
                    State = orderDto.ShippingAddress.State,
                    Zip = orderDto.ShippingAddress.Zip,
                    Country = orderDto.ShippingAddress.Country,
                };
                user.Address = adrress;
            }
            var result = await _context.SaveChangesAsync() > 0;
            if(result) return CreatedAtRoute("GetOrder", new {id = order.Id}, order.Id);
            return BadRequest("Problem Creating Order");
        }
    }
}