// import { Component } from '@angular/core';
// import { PRODUCTS } from '../../Data/Products';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-product-list',
//   imports: [CommonModule, ReactiveFormsModule, FormsModule],
//   templateUrl: './product-list.component.html',
//   styleUrl: './product-list.component.css'
// })
// export class ProductListComponent {
//   products = PRODUCTS;

//   productForm: FormGroup;
//   isEditMode = false;
//   editIndex: number | null = null;
//   showForm = false;
//   confirmDeletingIndex: number | null = null;
//   categories = ['Grocery', 'Spices', 'Kitchenware', 'Bakery', 'Drinks', 'Snacks'];
//   filters: any;

//   constructor(private fb: FormBuilder) {
//     this.productForm = this.fb.group({
//       id: ['P-XXX', Validators.required],
//       name: ['', Validators.required],
//       category: ['', Validators.required],
//       price: [0, [Validators.required, Validators.min(0.5)]],
//       stock: [0, [Validators.required, Validators.min(0)]],
//       image: ['', Validators.required],
//       status: ['active']
//     });
//   }

//   toggleForm() {
//     this.showForm = !this.showForm;
//     if (!this.showForm) {
//       this.productForm.reset({ status: 'active' });
//       this.isEditMode = false;
//       this.editIndex = null;
//     }
//   }

//   onSubmit() {
//     if (this.productForm.invalid) {
//       this.productForm.markAllAsTouched();
//       // alert('Please fill out all required fields before submitting.');
//       return;
//     }
//     const formValue = this.productForm.value;

//     if (!formValue.id.startsWith('P-')) {
//       formValue.id = 'P-' + formValue.id;
//     }

//     if (this.isEditMode && this.editIndex !== null) {
//       this.products[this.editIndex] = formValue;
//     } else {
//       this.products.push(formValue);
//     }
//     this.productForm.reset({ status: 'active' });
//     this.isEditMode = false;
//     this.editIndex = null;
//     this.showForm = false;
//   }

//   editProduct(index: number) {
//     this.productForm.setValue(this.products[index]);
//     this.isEditMode = true;
//     this.editIndex = index;
//     this.showForm = true;
//   }

//   //Deleting products:
//   askToDelete(index: number)
//   {
//     this.confirmDeletingIndex = index;
//   }

//   confirmDeleting(){
//     if(this.confirmDeletingIndex != null){
//       this.products.splice(this.confirmDeletingIndex, 1);
//       this.confirmDeletingIndex = null;
//     }
//   }

//   cancelDeleting(){
//     this.confirmDeletingIndex = null;
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PRODUCTS } from '../../Data/Products'; // Default product data
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = []; // To store products, initially empty
  productForm: FormGroup;
  isEditMode = false;
  editIndex: number | null = null;
  showForm = false;
  confirmDeletingIndex: number | null = null;
  categories = ['Grocery', 'Spices', 'Kitchenware', 'Bakery', 'Drinks', 'Snacks'];

  constructor(private fb: FormBuilder) {
    // Initialize form group
    this.productForm = this.fb.group({
      id: ['P-XXX', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.5)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      status: ['active']
    });
  }

  ngOnInit() {
    this.loadProducts();  // Load products from localStorage on initialization
  }

  // Toggle form visibility
  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.productForm.reset({ status: 'active' });
      this.isEditMode = false;
      this.editIndex = null;
    }
  }

  // Submit the form (Add or Edit Product)
  onSubmit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const formValue = this.productForm.value;

    if (!formValue.id.startsWith('P-')) {
      formValue.id = 'P-' + formValue.id; // Ensure proper product ID format
    }

    if (this.isEditMode && this.editIndex !== null) {
      this.products[this.editIndex] = formValue; // Update existing product
    } else {
      this.products.push(formValue); // Add new product
    }

    this.productForm.reset({ status: 'active' });
    this.isEditMode = false;
    this.editIndex = null;
    this.showForm = false;
    this.saveProducts();  // Save updated products to localStorage
  }

  // Edit existing product
  editProduct(index: number) {
    this.productForm.setValue(this.products[index]);
    this.isEditMode = true;
    this.editIndex = index;
    this.showForm = true;
  }

  // Delete product
  askToDelete(index: number) {
    this.confirmDeletingIndex = index;
  }

  confirmDeleting() {
    if (this.confirmDeletingIndex != null) {
      this.products.splice(this.confirmDeletingIndex, 1); // Remove product
      this.confirmDeletingIndex = null;
      this.saveProducts(); // Save updated products to localStorage
    }
  }

  cancelDeleting() {
    this.confirmDeletingIndex = null;
  }

  // Save the current product list to localStorage
  saveProducts() {
    localStorage.setItem('products', JSON.stringify(this.products)); // Save to localStorage
  }

  // Load products from localStorage
  loadProducts() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      this.products = JSON.parse(savedProducts); // Load from localStorage if available
    } else {
      this.products = PRODUCTS; // Use default products if none are saved
    }
  }
}
