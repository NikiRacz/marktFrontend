import { Component, NgModule } from '@angular/core';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { Product } from './product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  public productList!: Observable<Product[]>
  userInput: Product = { name: '', sort: '' }
  constructor(private _productService: ProductService) { };
  ngOnInit() {
    this.productList = this._productService.getProducts();
  }

  onSubmit() {
    this._productService.addProduct(this.userInput).subscribe(() => this.productList = this._productService.getProducts());
  }
}
