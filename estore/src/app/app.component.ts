import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CatalogModule } from './catalog/catalog.module';
import { CommonModule } from '@angular/common';
import { MembershipModule } from './membership/membership.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ItemComponent } from './shopping-cart/add-item/item.component';
import { HomeComponent } from './shopping-cart/home/home.component';
// import { UsermoduleComponent } from './usermodule/usermodule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule, CatalogModule, ShoppingCartModule, MembershipModule,ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Flower Shop';
}
