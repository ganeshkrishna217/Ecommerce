using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities.OrderAggregates;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class OrderExtension
    {
        public static IQueryable<OrderDto> ProjectOrderToOrderDto(this IQueryable<Order> query){
            return query
                .Select(order => new OrderDto{
                    Id = order.Id,
                    BuyerId = order.BuyerId,
                    OrderDate = order.OrderDate,
                    ShippingAddress = order.ShippingAddress,
                    DeliveryFee = order.DeliveryFee,
                    SubTotal = order.SubTotal,
                    Total = order.GetTotal(),
                    OrderStatus = order.OrderStatus.ToString(),
                    OrderItems = order.OrderItems.Select(item => new OrderItemDto{
                        ProductId = item.ItemOrdered.ProductId,
                        Name = item.ItemOrdered.Name,
                        PictureUrl = item.ItemOrdered.PictureUrl,
                        Price = item.Price,
                        Quantity = item.Quantity,
                    }).ToList()
                }).AsNoTracking();
        }
    }
}