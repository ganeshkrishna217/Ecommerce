using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DbIntializer
    {
        public static async Task Intializer(DataContext context, UserManager<User> userManager){

            if(!userManager.Users.Any()){
                var user = new User{
                    UserName = "bkg",
                    Email = "bkg@test.com",
                };
                await userManager.CreateAsync(user, "Pa$$word#BKGG217");
                await userManager.AddToRoleAsync(user, "Member");
                
                var admin = new User{
                    UserName = "admin",
                    Email = "admin@test.com",
                };
                await userManager.CreateAsync(admin,"Pa$$word#BKGG217");
                await userManager.AddToRolesAsync(admin, new[] { "Member", "Admin" });

            }

            if(context.Products.Any()) return ;
            var products = new List<Product>{
                new Product
                {
                    Name = "Black Vegan Leather Mid-Heel Derby Boots",
                    Description = "Black women vegan leather mid heel derby boots with track outsole. Has cushioned collar with top stitching detail on collar and ankle. Five eyelets and two hooks facing. Inside zip to wear easily. Fabric lining and memory foam insock for ultimate comfort.",
                    Price = 308000,
                    PictureUrl = "/images/products/Black_Vegan_Leather_Mid-Heel_Derby_Boots.jpeg",
                    Brand = "Marc Loire",
                    Type = "Boots",
                    QuantityInStock = 100
                },
new Product
                {
                    Name = "Black Leather Camzin Dime Ankle Boot",
                    Description = "Camzin Dime - This full grain leather ankle boot is accented by a strappy buckle detail and a fold-over topline. A subtle inside zipper provides a convenient fit and Ultimate Comfort features including an impact-absorbing Ortholite® footbed reduce the shock of each step.",
                    Price = 417700,
                    PictureUrl = "/images/products/Black_Leather_Camzin_Dime_Ankle_Boot.jpeg",
                    Brand = "Marc Loire",
                    Type = "Boots",
                    QuantityInStock = 100
                },
new Product
                {
                    Name = "Brown Ankle Boot",
                    Description = "Cora BraidBoot Dark Khaki Sued ,D ,5+",
                    Price = 314900,
                    PictureUrl = "/images/products/Brown_Ankle_Boot.jpeg",
                    Brand = "Marc Loire",
                    Type = "Boots",
                    QuantityInStock = 140
                },
new Product
                {
                    Name = "Black Chelsea Boots",
                    Description = "Crafted from luxuriously soft faux leather, they offer a comfortable feel that molds to your feet for a personalized fit. The iconic Chelsea silhouette transcends trends, providing a touch of classic elegance to both casual and dressy outfits.",
                    Price = 299900,
                    PictureUrl = "/images/products/Black_Chelsea_Boots.jpeg",
                    Brand = "Mochi",
                    Type = "Boots",
                    QuantityInStock = 150
                },
new Product
                {
                    Name = "Tan Ankle Derby Boots",
                    Description = "Tan vegan leather ankle boots with back loop, top stitching detail and twin zips. Has track wedge outsole. Fabric lining and memory foam insock for ultimate comfort.",
                    Price = 237600,
                    PictureUrl = "/images/products/Tan_Ankle_Derby_Boots.jpeg",
                    Brand = "Mochi",
                    Type = "Boots",
                    QuantityInStock = 150
                },
new Product
                {
                    Name = "Brown Ankle Leather Boots with Buckle Detail",
                    Description = "These stunning boots are crafted from genuine brown leather for a luxurious and sophisticated look that is sure to turn heads. The stylish buckle detailing adds a touch of Western flair, making them perfect for both casual and dressy occasions.",
                    Price = 299900,
                    PictureUrl = "/images/products/Brown_Ankle_Leather_Boots_with_Buckle_Detail.jpeg",
                    Brand = "Mochi",
                    Type = "Boots",
                    QuantityInStock = 150
                },
new Product
                {
                    Name = "Black Synthetic Ankle Boots",
                    Description = "With a strong focus on fashion and style, CLARKS caters to the young cosmopolitan Indian offering them the season’s latest trends and catering to their ever-changing fashion needs.",
                    Price = 199500,
                    PictureUrl = "/images/products/Black_Synthetic_Ankle_Boots.jpeg",
                    Brand = "Clarks",
                    Type = "Boots",
                    QuantityInStock = 150
                },
new Product
                {
                    Name = "White Tan Ankle Derby Boots",
                    Description = "Off-white leather ankle derby boots with tan contrast collar, tongue and gunmetal D-ring ilets. Inside zip to wear easily. Fabric lining and memory foam insock for ultimate comfort.",
                    Price = 410000,
                    PictureUrl = "/images/products/White_Tan_Ankle_Derby_Boots.jpeg",
                    Brand = "Clarks",
                    Type = "Boots",
                    QuantityInStock = 200
                },
new Product
                {
                    Name = "Black Ankle Boot",
                    Description = "Camzin Strap Black",
                    Price = 395300,
                    PictureUrl = "/images/products/Black_Ankle_Boot.jpeg",
                    Brand = "Clarks",
                    Type = "Boots",
                    QuantityInStock = 200
                },
new Product
                {
                    Name = "Khaki Corduroy Beret Cap",
                    Description = "Crafted with meticulous attention to detail, it features a soft and cozy corduroy fabric that adds a touch of elegance to any outfit. The beret style adds a classic french charm, perfect for channeling your inner fashionista",
                    Price = 199900,
                    PictureUrl = "/images/products/Khaki_Corduroy_Beret_Cap.jpeg",
                    Brand = "Chokore",
                    Type = "Hats",
                    QuantityInStock = 200
                },
new Product
                {
                    Name = "Khaki Cowboy Hat with Dual Tone Band",
                    Description = "Crafted with meticulous attention to detail, it features a soft and cozy corduroy fabric that adds a touch of elegance to any outfit. The beret style adds a classic french charm, perfect for channeling your inner fashionista",
                    Price = 264000,
                    PictureUrl = "/images/products/Khaki_Cowboy_Hat_with_Dual_Tone_Band.jpeg",
                    Brand = "Chokore",
                    Type = "Hats",
                    QuantityInStock = 200
                },
new Product
                {
                    Name = "Brown Sunshade Fedora Hat",
                    Description = "Shield yourself from the sun with the Chokore Sunshade Fedora Hat. Designed with a wide brim for maximum sun protection, this hat combines western-inspired style with beach-friendly materials. Perfect for sunny days by the water or outdoor events.",
                    Price = 329900,
                    PictureUrl = "/images/products/Brown_Sunshade_Fedora_Hat.jpeg",
                    Brand = "Chokore",
                    Type = "Hats",
                    QuantityInStock = 200
                },
new Product
                {
                    Name = "Beige Wide Brim Grass Panama Hat",
                    Description = "It is lightweight comfortable, this hat features a classic fedora shape with a beach-ready twist. Perfect for sunny days, it pairs effortlessly with your favorite swimwear.",
                    Price = 319900,
                    PictureUrl = "/images/products/Beige_Wide_Brim_Grass_Panama_Hat.jpeg",
                    Brand = "Chokore",
                    Type = "Hats",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Off-White Summer Straw Hat with Buckle Belt",
                    Description = "Crafted from breathable straw for comfort and style, this hat features a classic cowboy silhouette with a twist. Perfect for outdoor adventures or casual wear.",
                    Price = 239900,
                    PictureUrl = "/images/products/Off-White_Summer_Straw_Hat_with_Buckle_Belt.jpeg",
                    Brand = "Chokore",
                    Type = "Hats",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Dark Brown Leather Cowboy Hat with Metal Ring Details",
                    Description = "Crafted from premium leather, this hat features a unique buckle ring design that adds a rugged, Western flair. Perfect for outdoor adventures or adding a cowboy touch to your look, this hat combines durability with bold style.",
                    Price = 329900,
                    PictureUrl = "/images/products/Dark_Brown_Leather_Cowboy_Hat_with_Metal_Ring_Details.jpeg",
                    Brand = "Chokore",
                    Type = "Hats",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Beige Slip-On Sun Visor Hats for Women",
                    Description = "Perfect for outdoor adventures or adding a cowboy touch to your look, this hat combines durability with bold style.",
                    Price = 229900,
                    PictureUrl = "/images/products/Beige_Slip-On_Sun_Visor_Hats_for_Women.jpeg",
                    Brand = "Marc Loire",
                    Type = "Hats",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Black Cotton Bucket Hat Fisherman Cap",
                    Description = "Made of soft cotton material ligh in weight and easy to carry anywhere and everywhere. Here at Handcuffs, our selection of everyday bucket hats are designed, packaged, and shipped with the utmost care and attention.",
                    Price = 284900,
                    PictureUrl = "/images/products/Black_Cotton_Bucket_Hat_Fisherman_Cap.jpeg",
                    Brand = "Marc Loire",
                    Type = "Hats",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Black Minimal Straw Fedora Hat",
                    Description = "Crafted from durable materials, this hat features a chic leather band detail that adds a touch of sophistication to your beachwear. Perfect for sunny days, it offers both fashion and function.",
                    Price = 229900,
                    PictureUrl = "/images/products/Black_Minimal_Straw_Fedora_Hat.jpeg",
                    Brand = "Marc Loire",
                    Type = "Hats",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Titan Karishma Analog Black Dial Watch",
                    Description = "Titan analog watch comes with Quartz Analog Movement and a durable battery. It is designed to enhance your looks and is a perfect gifting option for your near & dear ones.",
                    Price = 159900,
                    PictureUrl = "/images/products/Titan_Karishma_Analog_Black_Dial_Watch.jpeg",
                    Brand = "Titan",
                    Type = "Watch",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Titan Neo Iv Analog Black Dial Metal Band Watch",
                    Description = "This Analogue watch has Round Black dial with a dial diameter of 49.2 Millimeters . The Black colored straps in the watch are made of Metal.",
                    Price = 559700,
                    PictureUrl = "/images/products/Titan_Neo_Iv_Analog_Black_Dial_Metal_Band_Watch.jpeg",
                    Brand = "Titan",
                    Type = "Watch",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Titan Minimalist Zen Analog Black Watch",
                    Description = "Everyday contemporary wear from Titan",
                    Price = 227200,
                    PictureUrl = "/images/products/Titan_Minimalist_Zen_Analog_Black_Watch.jpeg",
                    Brand = "Titan",
                    Type = "Watch",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Titan Studded Brown Leather Analog Watch",
                    Description = "Gloss finished Case watch for Women by Titan",
                    Price = 178800,
                    PictureUrl = "/images/products/Titan_Studded_Brown_Leather_Analog_Watch.jpeg",
                    Brand = "Titan",
                    Type = "Watch",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Titan Workwear Green Dial Analog Leather Strap Watch",
                    Description = "Get this stylish and trendy watch for you. Enhance your festive look with this.",
                    Price = 269900,
                    PictureUrl = "/images/products/Titan_Workwear_Green_Dial_Analog_Leather_Strap_Watch.jpeg",
                    Brand = "Titan",
                    Type = "Watch",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Fastrack Unisex Analog Watch",
                    Description = "6 Months manufacturer warranty on manufacturing defects",
                    Price = 80500,
                    PictureUrl = "/images/products/Fastrack_Unisex_Analog_Watch.jpeg",
                    Brand = "Fastrack",
                    Type = "Watch",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Fastrack Stunners Quartz Analog Silver Dial Metal Strap Watch",
                   Description = "An exquisite statement of fashion & quirk, introducing a range of watches to turn the eyeballs wherever you go. Exemplify the trend through your style, with Fastrack Stunners 5.0",
                    Price = 111600,
                    PictureUrl = "/images/products/Fastrack_Stunners_Quartz_Analog_Silver_Dial_Metal_Strap_Watch.jpeg",
                    Brand = "Fastrack",
                    Type = "Watch",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Fastrack Stunners Quartz Analog Black Dial Stainless Steal Strap Watch",
                   Description = "An exquisite statement of fashion & quirk, introducing a range of watches to turn the eyeballs wherever you go. Exemplify the trend through your style, with Fastrack Stunners 5.0",
                    Price = 180000,
                    PictureUrl = "/images/products/Fastrack_Stunners_Quartz_Analog_Black_Dial_Stainless_Steal_Strap_Watch.jpeg",
                    Brand = "Fastrack",
                    Type = "Watch",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Fastrack Analog Blue Dial Silver Band Metal Watch",
                   Description = "Exemplify the trend through your style, with Fastrack Stunners 6.0 Case dimension: 40.30x47.30x7.65 Water resistance: 5 ATM / 50 m | Metal Strap | Stainless steel back cover | High precision quartz analogue movement | 2 years warranty period",
                    Price = 119300,
                    PictureUrl = "/images/products/Fastrack_Analog_Blue_Dial_Silver_Band_Metal_Watch.jpeg",
                    Brand = "Fastrack",
                    Type = "Watch",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Titan 100% UV Protected Blue Lens Pilot Sunglasses",
                   Description = "When it comes to timepieces, Titan is a well-known brand that is trusted by an entire country. They have a varied collection of watches in different designs for both men and women. This truly makes Titan watches a preferred brand among people of all ages.",
                    Price = 257900,
                    PictureUrl = "/images/products/Titan_100%_UV_Protected_Blue_Lens_Pilot_Sunglasses.jpeg",
                    Brand = "Titan",
                    Type = "Sunglasses",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Titan Black Lens Sunglasses",
                   Description = "When it comes to timepieces, Titan is a well-known brand that is trusted by an entire country. They have a varied collection of watches in different designs for both men and women. This truly makes Titan watches a preferred brand among people of all ages.",
                    Price = 229900,
                    PictureUrl = "/images/products/Titan_Black_Lens_Sunglasses.jpeg",
                    Brand = "Titan",
                    Type = "Sunglasses",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Titan Black Square Shaped Polarized Sunglasses",
                   Description = "Titan EyeX Smart Sunglasses with Fitness Tracker, Open Ear Speakers and Bluetooth",
                    Price = 563900,
                    PictureUrl = "/images/products/Titan_Black_Square_Shaped_Polarized_Sunglasses.jpeg",
                    Brand = "Titan",
                    Type = "Sunglasses",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Titan 100% UV Protected Brown Lens Pilot Sunglasses",
                   Description = "Titan brings to you a high performing sunglasses from the house of TATA. Contemperory design, high quality material with afforadable prcing. Redefine your style with Titan Sunglasses",
                    Price = 235900,
                    PictureUrl = "/images/products/Titan_100%_UV_Protected_Brown_Lens_Pilot_Sunglasses.jpeg",
                    Brand = "Titan",
                    Type = "Sunglasses",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Titan Gradient Brown Lens Square UV Protected Sunglasses",
                   Description = "Titan brings to you a high performing sunglasses from the house of TATA. Contemperory design, high quality material with afforadable prcing. Redefine your style with Titan Sunglasses",
                    Price = 182900,
                    PictureUrl = "/images/products/Titan_Gradient_Brown_Lens_Square_UV_Protected_Sunglasses.jpeg",
                    Brand = "Titan",
                    Type = "Sunglasses",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Fastrack Pink Navigator Shaped 100% UV Protected Sunglasses",
                    Description = "Fastrack is the most iconic youth brand in the country, synonymous with style, attitude, and innovation. From classic aviators to trendy wayfarers, they offer sunglasses with unbeatable style, comfort, and UV protection.",
                    Price = 182900,
                    PictureUrl = "/images/products/Fastrack_Pink_Navigator_Shaped_100%_UV_Protected_Sunglasses.jpeg",
                    Brand = "Fastrack",
                    Type = "Sunglasses",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Fastrack Blue Navigator Shaped 100% UV Protected Sunglasses",
                    Description = "Fastrack is the most iconic youth brand in the country, synonymous with style, attitude, and innovation. From classic aviators to trendy wayfarers, they offer sunglasses with unbeatable style, comfort, and UV protection.",
                    Price = 182900,
                    PictureUrl = "/images/products/Fastrack_Blue_Navigator_Shaped_100%_UV_Protected_Sunglasses.jpeg",
                    Brand = "Fastrack",
                    Type = "Sunglasses",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Fastrack Black Sports Shaped 100% UV Protected Sunglasses",
                    Description = "Sports sunglasses are a type of eyewear specifically designed to provide protection and enhance visual performance during sports and outdoor activities.These are included with UV Protection, Impact Resistance, Wraparound Design, Lens Technology, Anti-Fog Coating, Lightweight and Comfortable, Impact Protection.",
                    Price = 157900,
                    PictureUrl = "/images/products/Fastrack_Black_Sports_Shaped_100%_UV_Protected_Sunglasses.jpeg",
                    Brand = "Fastrack",
                    Type = "Sunglasses",
                    QuantityInStock = 200
                },
                new Product
                {
                    Name = "Fastrack Green Gradient Navigator Shaped 100% UV Protected Sunglasses",
                    Description = "The Sunglasses are made up of Metal frame with Polycarbonate Lens in the shape of Navigator",
                    Price = 105900,
                    PictureUrl = "/images/products/Fastrack_Green_Gradient_Navigator_Shaped_100%_UV_Protected_Sunglasses.jpeg",
                    Brand = "Fastrack",
                    Type = "Sunglasses",
                    QuantityInStock = 200
                },
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}