import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  public customersList!: Observable<Customer[]>;
  userInput: Customer = { name: '' };
  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this.customersList = this._customerService.getCustomer()
  }

  onSubmit() {
    this._customerService.addCustomer(this.userInput).subscribe((d) => this.customersList = this._customerService.getCustomer());
  }
}
