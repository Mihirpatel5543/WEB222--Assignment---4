/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:        Mihir Bakulbhai patel
 *      Student ID:  134024231
 *      Date:        11/3/2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

// Function to display products in the selected category
function displayProducts(categoryId) {
    // Find the category's name for the title
    const category = categories.find(cat => cat.id === categoryId);
    document.getElementById('selected-category').textContent = category.name;
  
    // Get the <tbody> element to display products
    const tbody = document.getElementById('category-products');
    tbody.innerHTML = ''; // Clear existing products
  
    // Filter products by selected category and exclude discontinued items
    const filteredProducts = products.filter(
      product => product.categories.includes(categoryId) && !product.discontinued
    );
  
    // Add each product to the table
    filteredProducts.forEach(product => {
      const row = document.createElement('tr');
      
      // Add product details to the row
      const nameCell = document.createElement('td');
      nameCell.textContent = product.title;
  
      const descriptionCell = document.createElement('td');
      descriptionCell.textContent = product.description;
  
      const priceCell = document.createElement('td');
      priceCell.textContent = (product.price / 100).toLocaleString("en-CA", {
        style: "currency",
        currency: "CAD"
      });
  
      // Append cells to the row
      row.appendChild(nameCell);
      row.appendChild(descriptionCell);
      row.appendChild(priceCell);
  
      // Add click handler to log product details to the console
      row.addEventListener('click', () => console.log(product));
  
      // Append row to the tbody
      tbody.appendChild(row);
    });
  }
  
  // Function to create category buttons and set up event listeners
  function createCategoryButtons() {
    const menu = document.getElementById('menu');
    
    categories.forEach(category => {
      const button = document.createElement('button');
      button.textContent = category.name;
      button.addEventListener('click', () => displayProducts(category.id));
      menu.appendChild(button);
    });
  
    // Display products of the first category by default
    if (categories.length > 0) {
      displayProducts(categories[0].id);
    }
  }
  
  // Run the createCategoryButtons function when the page loads
  window.addEventListener('DOMContentLoaded', createCategoryButtons);