import { Routes } from '@angular/router';
import { SignInComponent } from './membership/sign-in/sign-in.component';
import { CartComponent } from './shopping-cart/cart-items/cart.component';
import { ItemComponent } from './shopping-cart/add-item/item.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './shopping-cart/home/home.component';
import { RegisterComponent } from './membership/register/register.component';


export const routes: Routes = [
   { path: '', component: HomeComponent },          // Homepage
  { path: 'addtocart', component: ItemComponent },
  { path: 'cart', component: CartComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }   
];