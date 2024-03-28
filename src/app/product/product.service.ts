import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Array<Product>>("http://localhost:8080/product/all");
  }

  public addProduct(userInput: Product): Observable<any> {
    return this.http.post("http://localhost:8080/product/new", userInput)
  }
}
