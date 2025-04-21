import { Component } from '@angular/core';
import { PRODUCTS } from '../../Data/Products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = PRODUCTS;

  addProduct() {
    alert('Add new product clicked!');
  }
  
  editProduct(product: any) {
    alert(`Editing product: ${product.name}`);
  }
  
  updateProduct(product: any) {
    alert(`Updating product: ${product.name}`);
  }
  
  deleteProduct(index: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.product.splice(index, 1);
    }
  }
  
}
