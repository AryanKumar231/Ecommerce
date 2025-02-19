
import { wear, wear2, wear3, wear4, wear5, wear6, wear7, wear8, wear9, wear10, wear11, wear12, wear13, wear14, wear15, wear16, wear17, wear18, wear19, wear20, wear21, wear22, wear23, wear24, wear25, wear26, wear27, wear28, wear29 } from "../../public/assets/index"
const productData = [
    {
        id: "P001",
        name: "Classic White T-Shirt",
        description: "A timeless essential. Made from soft, breathable cotton.",
        price: 29.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/tpxrftozvnijdq74vehs",
        discount: 0.15,
        category: "men",
        type: "top wear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white", "black", "gray", "navy"],
        details: `<p>This classic white t-shirt is a wardrobe staple, perfect for any casual occasion. Crafted from 100% premium cotton, it offers exceptional comfort and breathability, keeping you cool and comfortable all day long. The timeless design features a crew neck and a regular fit, making it versatile enough to pair with jeans, chinos, or shorts.  The durable construction ensures long-lasting wear, wash after wash.  This t-shirt is pre-shrunk to minimize shrinkage and maintain its shape. Available in a range of sizes from S to XXL and in classic colors like white, black, gray and navy, you're sure to find your perfect fit.  Add this essential piece to your wardrobe today and experience the perfect blend of comfort, style, and quality.</p><p><b>Care Instructions:</b> Machine wash cold, tumble dry low. Do not bleach.</p><p><b>Material:</b> 100% Premium Cotton</p>`
    },
    {
        id: "P002",
        name: "Slim Fit Jeans",
        description: "Stylish and comfortable jeans with a modern slim fit.",
        price: 79.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/yimlhiukpg8ukity67cl",
        discount: 0.10,
        category: "men",
        type: "bottom wear",
        sizes: ["30", "32", "34", "36", "38"],
        colors: ["blue", "black", "gray"],
        details: `<p>Upgrade your denim collection with these stylish slim-fit jeans. Crafted from a premium blend of cotton and elastane, these jeans offer a comfortable stretch and a modern silhouette. The slim fit accentuates your physique while allowing for freedom of movement.  The classic five-pocket design provides ample storage for your essentials. These jeans are perfect for dressing up with a shirt and blazer or dressing down with a t-shirt and sneakers. The durable construction and high-quality materials ensure that these jeans will be a staple in your wardrobe for years to come. Available in a range of sizes and washes, you're sure to find the perfect pair to match your style.</p><p><b>Care Instructions:</b> Machine wash cold, tumble dry low. </p><p><b>Material:</b> 98% Cotton, 2% Elastane</p>`
    },
    {
        id: "P003",
        name: "Hoodie with Zipper",
        description: "Perfect for layering. Soft fleece material for extra warmth.",
        price: 49.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/vxwcm4zqmezcr0gfw5li",
        extra_images: [
            "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/vxwcm4zqmezcr0gfw5li",
            "https://rukminim2.flixcart.com/image/128/128/xif0q/sweatshirt/v/t/s/l-sszip1-plain-skin-fashion-and-youth-original-imah542vh9k9xqxh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/128/128/xif0q/sweatshirt/g/s/r/l-sszip1-plain-skin-fashion-and-youth-original-imah542v5wntthgr.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/128/128/xif0q/sweatshirt/4/e/u/l-sszip1-plain-skin-fashion-and-youth-original-imah542vthx3pgvg.jpeg?q=70&crop=false"
        ],
        discount: 0.20,
        category: "men",
        type: "top wear",
        sizes: ["S", "M", "L", "XL"],
        colors: ["gray", "navy", "black"],
        details: `<p>Stay warm and comfortable with this classic zip-up hoodie. Made from a soft fleece material, it's perfect for layering on chilly days. The versatile design features a full-length zipper, a drawstring hood, and ribbed cuffs and hem. The kangaroo pockets provide ample storage for your essentials. This hoodie is perfect for casual wear, workouts, or lounging at home.  The durable construction ensures long-lasting wear. Available in a variety of sizes and colors, you're sure to find the perfect hoodie to match your style.</p><p><b>Care Instructions:</b> Machine wash cold, tumble dry low.</p><p><b>Material:</b> 80% Cotton, 20% Polyester Fleece</p>`
    },
    {
        id: "P004",
        name: "Summer Dress - Floral Print",
        description: "Light and breezy dress for summer days. Beautiful floral print.",
        price: 59.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/gnufoiifwq4vs0dcjmac",
        discount: 0.05,
        category: "women",
        type: "dress",
        sizes: ["XS", "S", "M", "L"],
        colors: ["pink", "blue", "yellow"],
        details: `<p>Embrace the summer vibes with this beautiful floral print dress. Made from a light and breezy fabric, it's perfect for warm days. The flattering design features a flowing silhouette and a vibrant floral print.  Whether you're attending a garden party, going on a picnic, or simply enjoying a day out, this dress will make you feel confident and stylish. The high-quality materials and construction ensure that this dress will be a summer staple for years to come.</p><p><b>Care Instructions:</b> Hand wash cold, hang to dry.</p><p><b>Material:</b> 100% Rayon</p>`
    },
    {
        id: "P005",
        name: "Leather Jacket - Black",
        description: "A classic leather jacket that will never go out of style.",
        price: 199.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/xgyvwrc5po1eh8juxgcv",
        discount: 0.10,
        category: "women",
        type: "outerwear",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["black", "brown"],
        details: `<p>A timeless classic, this black leather jacket is a must-have for any wardrobe. Crafted from high-quality genuine leather, it offers both style and durability. The sleek design features a fitted silhouette, a zip closure, and multiple pockets. This jacket is perfect for adding a touch of edgy sophistication to any outfit. Dress it up with a dress and heels or dress it down with jeans and a t-shirt.  This jacket will only get better with age, developing a unique patina over time.</p><p><b>Care Instructions:</b> Clean with leather conditioner.</p><p><b>Material:</b> Genuine Leather</p>`
    },
    {
        id: "P006",
        name: "Running Shoes - Performance",
        description: "Lightweight and supportive running shoes for optimal performance.",
        price: 99.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/hwghjhcxfhwesxox7uog",
        discount: 0.00,
        category: "men",
        type: "shoes",
        sizes: ["7", "8", "9", "10", "11"],
        colors: ["blue", "gray", "black"],
        details: `<p>Enhance your running performance with these lightweight and supportive running shoes. Designed with advanced cushioning technology, they provide optimal comfort and support for your feet. The breathable mesh upper keeps your feet cool and dry, while the durable outsole provides excellent traction. Whether you're a seasoned runner or just starting out, these shoes will help you reach your goals. The stylish design also makes them perfect for everyday wear.</p><p><b>Care Instructions:</b> Spot clean with mild soap and water.</p><p><b>Material:</b> Mesh and Synthetic Materials</p>`
    },
    {
        id: "P007",
        name: "Winter Scarf - Wool",
        description: "Stay warm and cozy with this soft wool scarf.",
        price: 24.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/mdu7oqbkgghycpsesxbc",
        discount: 0.15,
        category: "unisex",
        type: "accessories",
        sizes: ["One Size"],
        colors: ["red", "green", "beige"],
        details: `<p>Stay warm and stylish with this soft wool scarf. Crafted from high-quality wool, it provides exceptional warmth and comfort. The classic design makes it a versatile accessory that can be worn with any outfit. Whether you're braving the cold winter weather or simply adding a touch of style to your look, this scarf is the perfect choice. The generous length allows for multiple ways to wear it.</p><p><b>Care Instructions:</b> Hand wash cold, lay flat to dry.</p><p><b>Material:</b> 100% Wool</p>`
    },
    {
        id: "P008",
        name: "Denim Shirt - Blue",
        description: "A versatile denim shirt that can be dressed up or down.",
        price: 44.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/fcjolsljgjldc6dtkfny",
        discount: 0.00,
        category: "men",
        type: "top wear",
        sizes: ["S", "M", "L", "XL"],
        colors: ["blue", "light blue"],
        details: `<p>A classic denim shirt is a wardrobe essential, offering versatility and style. This shirt is crafted from durable denim and features a regular fit, making it comfortable and easy to wear. Dress it up with chinos or dress it down with jeans for a casual yet stylish look. The high-quality construction ensures long-lasting wear.</p><p><b>Care Instructions:</b> Machine wash cold, tumble dry low.</p><p><b>Material:</b> 100% Cotton Denim</p>`
    },
    {
        id: "P009",
        name: "Formal Suit - Navy",
        description: "A sharp and stylish suit perfect for formal occasions.",
        price: 299.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/ebeg7katvhgtkrvddqrv",
        discount: 0.05,
        category: "men",
        type: "formal wear",
        sizes: ["36R", "38R", "40R", "42R"], // Example suit sizes
        colors: ["navy", "black"],
        details: `<p>Make a lasting impression with this sharp and stylish navy suit. Crafted from a premium fabric blend, it offers both comfort and a refined look. The classic design features a single-breasted jacket and tailored trousers. Perfect for weddings, business meetings, or any formal event.  This suit exudes confidence and sophistication.</p><p><b>Care Instructions:</b> Dry clean only.</p><p><b>Material:</b> Wool Blend</p>`
    },
    {
        id: "P010",
        name: "Baseball Cap - Cotton",
        description: "A classic baseball cap made from breathable cotton.",
        price: 19.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/cpqlxfhlsfju6q3diuzp",
        discount: 0.25,
        category: "unisex",
        type: "accessories",
        sizes: ["One Size"],
        colors: ["black", "navy", "red"],
        details: `<p>A classic baseball cap is a must-have accessory for any casual look. Made from breathable cotton, it offers comfort and style. The adjustable strap ensures a perfect fit. Whether you're running errands, attending a sporting event, or simply enjoying a day out, this cap will keep you cool and stylish.</p><p><b>Care Instructions:</b> Hand wash cold.</p><p><b>Material:</b> 100% Cotton</p>`
    },
    {
        id: "P011",
        name: "Kids T-Shirt - Dinosaur Print",
        description: "Fun and colorful t-shirt for kids with a dinosaur print.",
        price: 14.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/fs2qu8xuv6se7fkkcywd",
        discount: 0.00,
        category: "kids",
        type: "top wear",
        sizes: ["2T", "3T", "4T", "5T"], // Example toddler sizes
        colors: ["green", "blue", "orange"],
        details: `<p>Let your little one's personality shine with this fun and colorful dinosaur print t-shirt. Made from soft and comfortable cotton, it's perfect for everyday wear. The playful design is sure to be a hit with kids.  Durable construction ensures it can withstand even the most active playtimes.</p><p><b>Care Instructions:</b> Machine wash cold, tumble dry low.</p><p><b>Material:</b> 100% Cotton</p>`
    },
    {
        id: "P012",
        name: "Girls Summer Dress - Polka Dots",
        description: "Cute summer dress for girls with a playful polka dot pattern.",
        price: 34.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/vpm1memjweu13qfaea9z",
        discount: 0.10,
        category: "kids",
        type: "dress",
        sizes: ["4", "5", "6", "7"], // Example kids sizes
        colors: ["pink", "blue", "red"],
        details: `<p>Perfect for summer days, this cute polka dot dress is a must-have for your little girl's wardrobe. Made from a light and breathable fabric, it's comfortable and stylish. The playful polka dot pattern adds a touch of fun. Whether it's a birthday party, a family gathering, or just a day at the park, this dress will make her feel special.</p><p><b>Care Instructions:</b> Machine wash cold, gentle cycle.</p><p><b>Material:</b> Cotton Blend</p>`
    },
    {
        id: "P013",
        name: "Boy's Cargo Shorts",
        description: "Durable and comfortable cargo shorts for boys.",
        price: 29.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/ranf7epucr3zlr9mzret",
        discount: 0.05,
        category: "kids",
        type: "bottom wear",
        sizes: ["4", "5", "6", "7"],
        colors: ["khaki", "navy", "green"],
        details: `<p>These durable and comfortable cargo shorts are perfect for active boys. Made from a sturdy fabric, they can withstand rough and tumble play. The multiple pockets provide ample storage for all their treasures. Whether they're exploring the backyard, going on a hike, or just hanging out with friends, these shorts will keep them comfortable and stylish.</p><p><b>Care Instructions:</b> Machine wash cold.</p><p><b>Material:</b> Cotton Blend</p>`
    },
    {
        id: "P014",
        name: "Women's Yoga Pants",
        description: "Comfortable and stretchy yoga pants for workouts or lounging.",
        price: 49.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/htugom0jepyiipw3fcod",
        discount: 0.15,
        category: "women",
        type: "bottom wear",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["black", "gray", "navy"],
        details: `<p>Experience ultimate comfort and flexibility with these yoga pants. Made from a soft and stretchy fabric, they move with you through every pose. The high-waisted design provides support and coverage, while the moisture-wicking technology keeps you dry and comfortable. Whether you're hitting the gym, practicing yoga, or simply relaxing at home, these pants are the perfect choice. The stylish design also makes them suitable for running errands or casual outings.</p><p><b>Care Instructions:</b> Machine wash cold, tumble dry low.</p><p><b>Material:</b> 88% Polyester, 12% Spandex</p>`
    },
    {
        id: "P015",
        name: "Men's Oxford Shirt",
        description: "A classic oxford shirt, perfect for both casual and formal occasions.",
        price: 59.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/jojgnmw6j4trd5kuwmxn",
        discount: 0.00,
        category: "men",
        type: "top wear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white", "blue", "pink"],
        details: `<p>A versatile classic, the oxford shirt is a staple for any man's wardrobe. This shirt is crafted from high-quality cotton and features a button-down collar and a regular fit.  It can be dressed up with a tie and blazer for a formal look or dressed down with jeans for a casual style. The durable construction ensures long-lasting wear, making it a reliable choice for any occasion.</p><p><b>Care Instructions:</b> Machine wash warm, tumble dry low. Iron if needed.</p><p><b>Material:</b> 100% Cotton</p>`
    },
    {
        id: "P016",
        name: "Women's Blouse - Silk",
        description: "Elegant silk blouse, perfect for special occasions.",
        price: 79.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/akhpfbltldkqvgfwbx48",
        discount: 0.10,
        category: "women",
        type: "top wear",
        sizes: ["XS", "S", "M", "L"],
        colors: ["white", "black", "champagne"],
        details: `<p>Elevate your style with this elegant silk blouse. Made from luxurious silk, it drapes beautifully and feels soft against the skin. The flattering design features a subtle sheen and delicate details. Whether you're attending a wedding, a cocktail party, or a special dinner, this blouse will make you feel confident and glamorous.  Pair it with a skirt or trousers for a sophisticated ensemble.</p><p><b>Care Instructions:</b> Hand wash cold or dry clean.</p><p><b>Material:</b> 100% Silk</p>`
    },
    {
        id: "P017",
        name: "Men's Chinos",
        description: "Stylish and versatile chinos, a great alternative to jeans.",
        price: 69.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/bb260fzncdh4pmsd8kmu",
        discount: 0.05,
        category: "men",
        type: "bottom wear",
        sizes: ["30", "32", "34", "36", "38"],
        colors: ["khaki", "navy", "gray"],
        details: `<p>Upgrade your casual wardrobe with these stylish chinos. Made from a comfortable cotton blend, they offer a refined look that's perfect for a variety of occasions. The versatile design can be dressed up with a blazer and dress shoes or dressed down with a t-shirt and sneakers. The classic fit and durable construction ensure that these chinos will be a staple in your wardrobe for years to come.</p><p><b>Care Instructions:</b> Machine wash cold, tumble dry low. Iron if needed.</p><p><b>Material:</b> 98% Cotton, 2% Elastane</p>`
    },
    {
        id: "P018",
        name: "Women's Cardigan",
        description: "A cozy cardigan, perfect for layering on cooler days.",
        price: 44.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/vg5poyh3zd6w1kqnoler",
        discount: 0.15,
        category: "women",
        type: "outerwear",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["cream", "gray", "black"],
        details: `<p>Stay warm and stylish with this cozy cardigan. Made from a soft and comfortable knit fabric, it's perfect for layering over dresses, blouses, or t-shirts. The classic design features an open front and a relaxed fit. Whether you're heading to the office, running errands, or enjoying a night out, this cardigan will keep you comfortable and stylish.</p><p><b>Care Instructions:</b> Hand wash cold, lay flat to dry.</p><p><b>Material:</b> Acrylic Blend</p>`
    },
    {
        id: "P019",
        name: "Men's Pullover Hoodie",
        description: "A comfortable pullover hoodie, perfect for casual wear.",
        price: 39.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/q682hvbaf5rp2zsqgqnf",
        discount: 0.20,
        category: "men",
        type: "top wear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["gray", "navy", "black"],
        details: `<p>Relax in style with this comfortable pullover hoodie. Made from a soft fleece material, it's perfect for lounging at home or running errands. The classic design features a drawstring hood and a kangaroo pocket.  Pair it with jeans or sweatpants for a casual and comfortable look. The durable construction ensures long-lasting wear.</p><p><b>Care Instructions:</b> Machine wash cold, tumble dry low.</p><p><b>Material:</b> 80% Cotton, 20% Polyester Fleece</p>`
    },
    {
        id: "P020",
        name: "Women's Maxi Skirt",
        description: "A flowing maxi skirt, perfect for summer days.",
        price: 54.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/x0hnjx1arbg9ql9tgo7t",
        discount: 0.05,
        category: "women",
        type: "bottom wear",
        sizes: ["XS", "S", "M", "L"],
        colors: ["floral", "black", "white"],
        details: `<p>Embrace effortless style with this flowing maxi skirt. Made from a lightweight and breathable fabric, it's perfect for warm weather. The flattering design features a comfortable elastic waistband and a flowing silhouette. Dress it up with a blouse and sandals or dress it down with a t-shirt and sneakers.  This skirt is a versatile addition to your summer wardrobe.</p><p><b>Care Instructions:</b> Machine wash cold, gentle cycle.</p><p><b>Material:</b> Rayon</p>`
    },
    {
        id: "P021",
        name: "Men's Leather Belt",
        description: "A stylish leather belt to complete your look.",
        price: 39.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/tkmezq7ammwwaomuoiac",
        discount: 0.00,
        category: "men",
        type: "accessories",
        sizes: ["32", "34", "36", "38", "40"],
        colors: ["black", "brown"],
        details: `<p>Elevate your style with this classic leather belt. Crafted from high-quality genuine leather, it's both durable and stylish. The simple design features a classic buckle and a sleek finish. This belt is perfect for adding a touch of sophistication to any outfit, whether you're dressing up for a special occasion or just adding a finishing touch to your everyday look.</p><p><b>Care Instructions:</b> Clean with a damp cloth.</p><p><b>Material:</b> Genuine Leather</p>`
    },
    {
        id: "P022",
        name: "Women's Sunglasses",
        description: "Stylish sunglasses for protection and fashion.",
        price: 69.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/rqkkixia4iiyywtz2ggd",
        discount: 0.10,
        category: "women",
        type: "accessories",
        sizes: ["One Size"],
        colors: ["black", "tortoiseshell", "brown"],
        details: `<p>Protect your eyes in style with these chic sunglasses. Designed with both fashion and function in mind, they offer UV protection and a flattering fit. The classic frames and stylish lenses complement a variety of face shapes. Whether you're lounging by the pool, exploring the city, or attending an outdoor event, these sunglasses will keep you looking and feeling your best.</p><p><b>Care Instructions:</b> Clean with a soft cloth.</p><p><b>Material:</b> Acetate Frames, Polycarbonate Lenses</p>`
    },
    {
        id: "P023",
        name: "Men's Swim Shorts",
        description: "Quick-drying swim shorts for a day at the beach or pool.",
        price: 34.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/gkwxqluqy3phymxxlcak",
        discount: 0.15,
        category: "men",
        type: "swimwear",
        sizes: ["S", "M", "L", "XL"],
        colors: ["blue", "red", "black"],
        details: `<p>Enjoy a day at the beach or pool in comfort and style with these quick-drying swim shorts. Made from a lightweight and breathable fabric, they'll keep you cool and comfortable all day long. The elastic waistband and drawstring ensure a secure and comfortable fit.  The vibrant colors and stylish design make them perfect for any summer adventure.</p><p><b>Care Instructions:</b> Machine wash cold, hang to dry.</p><p><b>Material:</b> Polyester</p>`
    },
    {
        id: "P024",
        name: "Women's One-Piece Swimsuit",
        description: "A stylish and flattering one-piece swimsuit.",
        price: 79.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/s5wkhviqpbgg79qrk8qh",
        discount: 0.05,
        category: "women",
        type: "swimwear",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["black", "navy", "red"],
        details: `<p>Make a splash with this stylish and flattering one-piece swimsuit. Designed with a classic silhouette and a supportive fit, it's perfect for lounging by the pool or swimming laps. The adjustable straps and removable cups provide customizable comfort.  The vibrant colors and timeless design make it a chic choice for any beach or poolside occasion.</p><p><b>Care Instructions:</b> Hand wash cold, hang to dry.</p><p><b>Material:</b> Nylon, Spandex</p>`
    },
    {
        id: "P025",
        name: "Kids' Backpack",
        description: "A fun and functional backpack for school or travel.",
        price: 29.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/jkncdsh32kxlwnhv2ls4",
        discount: 0.00,
        category: "kids",
        type: "accessories",
        sizes: ["One Size"],
        colors: ["blue", "pink", "green"],
        details: `<p>This fun and functional backpack is perfect for school, travel, or everyday adventures. Designed with kids in mind, it features a spacious main compartment, multiple pockets for organization, and adjustable straps for a comfortable fit.  The durable construction ensures that it can withstand the wear and tear of daily use.  The vibrant colors and playful designs make it a fun accessory for any child.</p><p><b>Care Instructions:</b> Spot clean with a damp cloth.</p><p><b>Material:</b> Polyester</p>`
    },
    {
        id: "P026",
        name: "Unisex Beanie",
        description: "A warm and cozy beanie for cold weather.",
        price: 19.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/h0cq4fcbb56m6hfwdili",
        discount: 0.10,
        category: "unisex",
        type: "accessories",
        sizes: ["One Size"],
        colors: ["black", "gray", "navy"],
        details: `<p>Stay warm and cozy with this classic beanie. Made from a soft and warm knit fabric, it's perfect for cold weather. The simple design makes it a versatile accessory that can be worn with any outfit. Whether you're hitting the slopes, running errands, or just relaxing at home, this beanie will keep you comfortable and stylish.</p><p><b>Care Instructions:</b> Hand wash cold, lay flat to dry.</p><p><b>Material:</b> Acrylic</p>`
    },
    {
        id: "P027",
        name: "Men's Polo Shirt",
        description: "A classic polo shirt for a smart casual look.",
        price: 44.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/jg2mzpmy27v5ufirvrbr",
        discount: 0.05,
        category: "men",
        type: "top wear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white", "navy", "black"],
        details: `<p>Achieve a timeless smart casual look with this classic polo shirt. Crafted from breathable cotton pique, it offers both comfort and style. The traditional design features a collared neckline and a button placket. This versatile shirt can be paired with jeans, chinos, or shorts for a variety of occasions.  The high-quality construction ensures long-lasting wear.</p><p><b>Care Instructions:</b> Machine wash cold, tumble dry low. Iron if needed.</p><p><b>Material:</b> 100% Cotton Pique</p>`
    },
    {
        id: "P028",
        name: "Women's Pencil Skirt",
        description: "A sophisticated pencil skirt for work or special occasions.",
        price: 64.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/k3w5ndct72tfoopnbbcy",
        discount: 0.15,
        category: "women",
        type: "bottom wear",
        sizes: ["XS", "S", "M", "L"],
        colors: ["black", "gray", "navy"],
        details: `<p>Exude confidence and sophistication with this classic pencil skirt. Made from a comfortable stretch fabric, it offers a flattering fit and a polished look. The knee-length design and sleek silhouette make it perfect for the office or special events. Pair it with a blouse and heels for a professional ensemble or dress it down with a t-shirt and sneakers for a more casual style.</p><p><b>Care Instructions:</b> Machine wash cold, hang to dry.</p><p><b>Material:</b> Polyester, Spandex</p>`
    },
    {
        id: "P029",
        name: "Men's Bomber Jacket",
        description: "A stylish bomber jacket for a casual and cool look.",
        price: 89.99,
        image: "https://res.cloudinary.com/dwua8djrv/image/upload/f_auto,q_auto/v1/ecommerce/zxggufbmbzpf7da22k07",
        discount: 0.10,
        category: "men",
        type: "outerwear",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "navy", "green"],
        details: `<p>Stay stylish and comfortable with this classic bomber jacket. Made from a durable and water-resistant fabric, it's perfect for layering in transitional weather. The ribbed collar, cuffs, and hem provide a snug fit, while the multiple pockets offer ample storage. Whether you're heading to the city or exploring the outdoors, this jacket will keep you looking and feeling your best.</p><p><b>Care Instructions:</b> Machine wash cold, tumble dry low.</p><p><b>Material:</b> Nylon Blend</p>`
    }

];

// ... (rest of the code for accessing and displaying data remains the same)


const category = ["mens", "womens", "kids", "unisex"];

const productType = ["top wear", "bottom wear", "outerwear", "shoes", "accessories", "formal wear", "swimwear", "dress"];

const productRange = ["$0 - $50", "$50 - $100", "$100 - $200", "$200 - $500", "$500+"];

const colors = ["black", "blue", "gray", "navy", "green", "red", "pink", "yellow", "orange", "beige", "brown", "white", "khaki"];





export {
    productData, category, productType, productRange, colors
}