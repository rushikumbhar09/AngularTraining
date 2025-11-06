import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../models/Item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FormsModule]
  ,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
item: Item = {
    productId: 0,
    title: '',
    price: 0,
    quantity: 1,
    imageUrl: ''
  };
constructor(private cartService: CartService){}
  
ngOnit(){
  this.cartService.getCartItems();
}
  onSubmit(product:any): void {
  if (!this.item.title || this.item.price <= 0 || !this.item.imageUrl) {
    alert('Please fill all fields correctly.');
    return;
  }
  // Generate incremental productId
  const cartItems = this.cartService.getCartItems();
  const maxId = cartItems.length ? Math.max(...cartItems.map(ci => ci.productId)) : 0;
  this.item.productId = maxId + 1;
  console.log(this.item)
  // No need to set productId manually
  this.cartService.addToCart(this.item);

  // Reset form
  this.item = { productId: 0, title: '', price: 0, quantity: 1, imageUrl: '' };

  alert('✅ Product added to cart!');

}

}
