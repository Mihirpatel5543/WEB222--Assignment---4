/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

//window.products = [//
  /*
    {
      id: "P1",
      title: "Title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  
];
*/
/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  { id: "p1", title: "TV Remote", description: "Universal TV remote control", price: 1200, categories: ["c1"] },
  { id: "p2", title: "Bluetooth Speaker", description: "High-quality wireless speaker", price: 30000, categories: ["c1"] },
  { id: "p3", title: "Earphones", description: "In-ear wired earphones", price: 7000, categories: ["c1"] },
  { id: "p4", title: "AC Remote", description: "Remote control for AC units", price: 1500, categories: ["c1"] },
  
  { id: "p5", title: "Pen Drive", description: "32GB USB 3.0 pen drive", price: 1500, categories: ["c2"] },
  { id: "p6", title: "Memory Card", description: "64GB SD card", price: 1000, discontinued: true, categories: ["c2"] },
  { id: "p7", title: "DVD", description: "Blank writable DVDs", price: 600, discontinued: true, categories: ["c2"] },
  
  { id: "p8", title: "Goggles", description: "Polarized sunglasse", price: 15000, categories: ["c3"] },
  { id: "p9", title: "Watch", description: "Smart watch with fitness tracking", price: 10000, categories: ["c3"] },
  { id: "p10", title: "Perfume", description: "Long-lasting fragrance", price: 15000, categories: ["c3"] }
];
