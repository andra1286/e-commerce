import { formatCurrency } from '../scripts/utils/money.js';

export function getProduct(productId) {
  let matchingProduct;

    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
  
  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return '';
  }
}

class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    return `
    <a href="${this.sizeChartLink}" target="_blank" class="size-chart"> Size chart<i class="fa-solid fa-shirt"></i></a>
    `;
  }
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/pink-notebook.jpg",
    name: "Plain Spiral A4 Notebook",
    rating: {
      stars: 4,
      count: 130
    },
    priceCents: 340,
    keywords: [
      "notebook",
      "school",
      "notes"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/vase.jpg",
    name: "Clear Glass Flower Vase",
    rating: {
      stars: 5,
      count: 12
    },
    priceCents: 1695,
    keywords: [
      "flower",
      "vase"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/dinner-plates-and-bowls-set.jpg",
    name: "Dinner Plates And Bowls Set",
    rating: {
      stars: 4.5,
      count: 58
    },
    priceCents: 3099,
    keywords: [
      "plates",
      "bowls",
      "kitchen"
    ]
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/women-jacket.jpeg",
    name: "Women Jacket",
    rating: {
      stars: 4.5,
      count: 1078
    },
    priceCents: 2045,
    keywords: [
      "jacket",
      "denim",
      "clothing"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/flowers-pencil-case.jpeg",
    name: "Flowers Pencil Case",
    rating: {
      stars: 5,
      count: 51
    },
    priceCents: 870,
    keywords: [
      "pencil case",
      "school"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-baking-set.webp",
    name: "6pcs Carbon Steel Baking Set",
    rating: {
      stars: 4.5,
      count: 284
    },
    priceCents: 3499,
    keywords: [
      "kitchen",
      "baking"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/unisex-sunglasses.webp",
    name: "UV Protection Sunglasses Black Lenses",
    rating: {
      stars: 3.5,
      count: 31
    },
    priceCents: 1230,
    keywords: [
      "sunglasses",
      "sun",
      "uv protection"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/towels-set.jpeg",
    name: "Cotton Towels Set",
    rating: {
      stars: 5,
      count: 27
    },
    priceCents: 2799,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/phone-case.webp",
    name: "Plain Solid Phone Case",
    rating: {
      stars: 5,
      count: 104
    },
    priceCents: 799,
    keywords: [
      "phone case",
      "phone accessories",
      "phone protection"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/men-shoes.webp",
    name: "Men's Sports Shoes",
    rating: {
      stars: 3.5,
      count: 80
    },
    priceCents: 4390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/hair-perfume.jpg",
    name: "Hair Perfume All Hair Types",
    rating: {
      stars: 4.5,
      count: 513
    },
    priceCents: 7100,
    keywords: [
      "hair",
      "perfume",
      "hair perfume",
      "beauty"
    ]
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/starter-nail-kit.jpg",
    name: "Starter Proffesional Nail Kit",
    rating: {
      stars: 4,
      count: 609
    },
    priceCents: 4060,
    keywords: [
      "nails",
      "nail kit"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/hair-brush.webp",
    name: "Hair Brush For Curly Hair",
    rating: {
      stars: 5,
      count: 292
    },
    priceCents: 1599,
    keywords: [
      "hair",
      "brush",
      "hair brush",
      "curly hair",
      "detangler"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/yellow-drill.jpg",
    name: "Cordless Drill/Driver Battery Included",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4099,
    keywords: [
      "drill",
      "constructions"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/mug-with-message.webp",
    name: "Personalized Ceramic Coffee Mug",
    rating: {
      stars: 5,
      count: 16
    },
    priceCents: 1699,
    keywords: [
      "mug",
      "coffee mug",
      "kitchen"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/women-necklace-heart.webp",
    name: "Women Red Heart Gold Necklace",
    rating: {
      stars: 3,
      count: 268
    },
    priceCents: 670,
    keywords: [
      "necklace",
      "jewelry",
      "gold necklace"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/face-cream-dry-skin.jpg",
    name: "Face Moisturizer Anti Aging Dry Skin",
    rating: {
      stars: 4,
      count: 302
    },
    priceCents: 2015,
    keywords: [
      "face cream",
      "beauty",
      "moisturizer",
      "anti aging",
      "dry skin"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/beach-women-hat.webp",
    name: "Women Bow Straw Beach Hat ",
    rating: {
      stars: 5,
      count: 215
    },
    priceCents: 3700,
    keywords: [
      "hat",
      "straw hat",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/gold-earrings.jpg",
    name: "24K Gold Lock Earrings",
    rating: {
      stars: 4.5,
      count: 590
    },
    priceCents: 9599,
    keywords: [
      "jewelry",
      "earrings",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/men-shirt-white.webp",
    name: "Men's White Shirt",
    rating: {
      stars: 4,
      count: 29
    },
    priceCents: 2999,
    keywords: [
      "shirt",
      "mens",
      "white shirt",
      "occasions shirt"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/floor-lamp.jpg",
    name: "Rattan Floor Lamp",
    rating: {
      stars: 4.5,
      count: 216
    },
    priceCents: 12250,
    keywords: [
      "lamp",
      "floor lamp",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/high-heels-shoes.avif",
    name: "Women's Stiletto High Heels Shoes",
    rating: {
      stars: 4,
      count: 101
    },
    priceCents: 18000,
    keywords: [
      "shoes",
      "high heels",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/cosmetic-mirror.jpg",
    name: "Cosmetic 2 Sided Mirror",
    rating: {
      stars: 4.5,
      count: 255
    },
    priceCents: 1099,
    keywords: [
      "mirror",
      "beauty",
      "cosmetic mirror"
    ]
  },
  ,
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/hair-curler.webp",
    name: "Ceramic Hair Curling Iron",
    rating: {
      stars: 3.5,
      count: 945
    },
    priceCents: 4300,
    keywords: [
      "hair",
      "curler",
      "curling iron",
      "beauty"
    ]
  }
].map((productDetails) => {
  if (productDetails.type === 'clothing') {
    return new Clothing(productDetails);
  }

  return new Product(productDetails);
});