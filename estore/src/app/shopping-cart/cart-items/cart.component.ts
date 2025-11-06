import { Component } from '@angular/core';
import { Item as CartItem } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 cartItems: CartItem[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
    console.log("Component Initiliaze")
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
    this.loadCart(); 
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.loadCart();
  }

updateQuantity(item: CartItem, event: any): void {
  const newQty = +event.target.value;
  if (newQty < 1) {
    event.target.value = item.quantity;
    return;
  }
  this.cartService.updateQuantity(item.productId, newQty);
  this.loadCart();
}


}