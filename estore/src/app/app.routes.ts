import { Routes } from '@angular/router';
import { SignInComponent } from './membership/sign-in/sign-in.component';
import { CartComponent } from './shopping-cart/cart-items/cart.component';
import { ItemComponent } from './shopping-cart/add-item/item.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './shopping-cart/home/home.component';
import { RegisterComponent } from './membership/register/register.component';
import { ListComponent } from './catalog/list/list.component';
import { DetailsComponent } from './catalog/details/details.component';
import { UpdateComponent } from './catalog/update/update.component';
import { DeleteComponent } from './catalog/delete/delete.component';



export const routes: Routes = [
   { path: '', component: HomeComponent },          // Homepage
  { path: 'addtocart', component: ItemComponent },
  { path: 'cart', component: CartComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'lists', component: ListComponent },
  { path:'details/:id',component:DetailsComponent},
   { path: 'addtocart/:id', component: ItemComponent },
   { path: 'update/:id', component:UpdateComponent},
    { path: 'delete/:id',component:DeleteComponent},

  { path: '**', redirectTo: '' }   
];