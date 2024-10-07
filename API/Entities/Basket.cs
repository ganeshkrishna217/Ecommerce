

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId{ get; set; }

        public List<BasketItem> BasketItems { get; set; } = new List<BasketItem>();

        public void AddBasketItem(Product product, int quantity){
            if(BasketItems.All(item => item.ProductId != product.Id)){
                BasketItems.Add(new BasketItem{Product = product, Quantity = quantity});
            }
            var existingItem = BasketItems.FirstOrDefault(item => item.ProductId == product.Id);
            if(existingItem != null){
                existingItem.Quantity += quantity;
            }
        }
        public void RemoveBasketItem(int ProductId, int quantity){
            var existingItem = BasketItems.FirstOrDefault(item => item.ProductId == ProductId);
            if(existingItem != null){
                existingItem.Quantity -= quantity;
                if(existingItem.Quantity <= 0){
                    BasketItems.Remove(existingItem);
                }
            }
        }

    }
}