import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = 'https://api.exemplo.com/products';

  constructor(private http: HttpClient) {}

  search(query: string | null): Observable<Product[]> {
    if (!query || query.trim() === '') {
      return this.http.get<Product[]>(this.API_URL);
    }

    return this.http.get<Product[]>(`${this.API_URL}?search=${query}`);
  }
}