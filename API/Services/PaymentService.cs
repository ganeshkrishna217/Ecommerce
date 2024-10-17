using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Stripe;

namespace API.Services
{
    public class PaymentService
    {
        private readonly IConfiguration _config;
        public PaymentService(IConfiguration config){
            _config = config;
        }
        public async Task<PaymentIntent> CreateOrUpdatePaymentIntent(Basket basket){
            StripeConfiguration.ApiKey = _config["StripeSettings:SecretKey"];
            var service = new PaymentIntentService();
            var intent = new PaymentIntent();
            var subtotal = basket.BasketItems.Sum(item => item.Quantity * item.Product.Price);
            var deliveryFee = subtotal == 0 ? 0 : subtotal < 100000 ? 5000 + subtotal / 10 : 0;
            
            if(string.IsNullOrWhiteSpace(basket.PaymentIntentId)){
                var options = new PaymentIntentCreateOptions{
                    Amount = deliveryFee + subtotal,
                    Currency = "INR",
                    PaymentMethodTypes = new List<string>{"card"}
                };
                intent = await service.CreateAsync(options);
                
            }
            else{
                var options = new PaymentIntentUpdateOptions{
                    Amount = deliveryFee + subtotal,
                };
                await service.UpdateAsync(basket.PaymentIntentId, options);
            }
            return intent;
        }
    }
}