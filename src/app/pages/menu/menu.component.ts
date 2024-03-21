import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  search(): void {

    // Get the search query
    const query = (document.getElementById("searchInput") as HTMLInputElement).value.toLowerCase();
    // Get all product elements
    const products = document.querySelectorAll("#productContainer .col-md-6");
    // Loop through each product
    products.forEach(function(product) {
      // Get the product title and description elements
      const titleElement = product.querySelector("h1") as HTMLElement;
      const descriptionElement = product.querySelector("p") as HTMLElement;
      // Check if the title and description elements exist
      if (titleElement && descriptionElement) {
        // Get the product title and description
        const title = titleElement.textContent?.toLowerCase();
        const description = descriptionElement.textContent?.toLowerCase();
        // Check if the query matches the title or description
        if (title?.includes(query) || description?.includes(query)) {
          // Show the product
          product.setAttribute("style", "display: block; border: 1px solid green;");
        } else {
          // Hide the product if it doesn't match the search query
          product.setAttribute("style", "display: none;");
        }

      }
      
    });

  }
  
}
