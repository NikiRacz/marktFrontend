import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private http: HttpClient) { }

  public getCustomer(): Observable<Customer[]> {
    return this.http.get<Array<Customer>>("http://localhost:8080/costumer/all");
  }

  public addCustomer(userInput: Customer): Observable<any> {
    return this.http.post("http://localhost:8080/costumer/new", userInput)
  }

}