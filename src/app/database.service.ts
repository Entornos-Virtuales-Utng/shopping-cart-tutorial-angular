import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  getItems() {
    const url = 'https://reqres.in/api/users?page=1';
    return this.http.get<any[]>(url);
  }
}
