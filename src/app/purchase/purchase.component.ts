import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { PurchaseService } from './purchase.service';


@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {

  public myForm!: FormGroup;

  public customers: Customer[] = [];
  public products: Product[] = [];

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private purchaseService: PurchaseService,
    private fb: FormBuilder
  ) {
  }

  public ngOnInit(): void {
    this.customerService.getCustomer().subscribe((res) => {
      this.customers = res;
    });
    console.log(this.customers);

    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    })

    this.myForm = new FormGroup({
      customer: new FormControl(),
      purchases: new FormBuilder().array([])

    });

    this.myForm.valueChanges.subscribe(console.log)
  }

  get purchaseForm() {
    return this.myForm.get('purchases') as FormArray
  }

  addPurchase() {
    const purchase = this.fb.group({
      product: [],
      amount: [],
      price: [],
    })

    this.purchaseForm.push(purchase);
  }

  deletePurchase(i: any) {
    this.purchaseForm.removeAt(i);
  }

  onSubmit() {
    this.purchaseService.addPurchase(this.myForm.value)
  }
}
