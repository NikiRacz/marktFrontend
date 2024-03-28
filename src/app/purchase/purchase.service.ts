import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  public addPurchase(userInput: Purchase) {
    return this.http.post("http://localhost:8080/purchase/new", userInput)
  }
}
