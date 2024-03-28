import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PurchaseComponent } from "./purchase/purchase.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, PurchaseComponent, MatToolbarModule, MatButtonModule, NavbarComponent]
})
export class AppComponent {
  title = 'Markt';

}
