import { Component } from '@angular/core';
import { PurchaseComponent } from '../purchase/purchase.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [PurchaseComponent, NavbarComponent]
})
export class HomeComponent {

}
