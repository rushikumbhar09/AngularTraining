import { Injectable } from '@angular/core';
import { Item as CartItem } from './models/Item';
@Injectable({
  providedIn: 'root'
})
export class CartService {

private storageKey = 'shoppingCart';

  constructor() {
    // Initialize sessionStorage with demo data if empty
     if (!sessionStorage.getItem(this.storageKey)) {
      sessionStorage.setItem(this.storageKey, JSON.stringify([]));
    }
     
  }

  //Add Product to Cart
  addToCart(item: CartItem): void {
     
     const cart = this.getCartItems();
     const existingItem = cart.find(ci => ci.productId === item.productId);

    if (existingItem) {
      existingItem.quantity += item.quantity; // Update quantity if already exists
    } else {
      cart.push(item);
    }

    this.saveCart(cart);
  }

  //Get All Cart Items
  getCartItems(): CartItem[] {
    const cartData = sessionStorage.getItem(this.storageKey);
    return cartData ? JSON.parse(cartData) : [];
  }

  //Update Quantity
  updateQuantity(productId: number, quantity: number): void {
     const cart = this.getCartItems();
     const item = cart.find(ci => ci.productId === productId);

    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
        return;
      }
      this.saveCart(cart);
    }
  }

  //Remove Product from Cart
  removeFromCart(productId: number): void {
    const cart = this.getCartItems().filter(ci => ci.productId !== productId);
    this.saveCart(cart);
   
  }

  //Clear Entire Cart
  clearCart(): void {
    sessionStorage.removeItem(this.storageKey);
    sessionStorage.setItem(this.storageKey, JSON.stringify([]));
  }

  //Calculate Total Items
  getTotalItems(): number {
    const cart = this.getCartItems();
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  //Calculate Total Amount
  getTotalPrice(): number {
   const cart = this.getCartItems();
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Private helper
  private saveCart(cart: CartItem[]): void {
    //save data to sessionStorage
    sessionStorage.setItem(this.storageKey, JSON.stringify(cart));
  }
}
