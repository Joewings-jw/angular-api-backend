import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products_url= 'api/products/';
  constructor(private http: HttpClient) { }

  get_products(): Observable<Product[]> {
    return this.http.get<Product[]>(this.products_url).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  create_product(product: Product): Observable<Product> {
    product.id = null;
    return this.http.post<Product>(this.products_url, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  edit_product(product: Product): Observable<any> {
    return this.http.put(this.products_url+ product.id, product);
  }

  delete_product(id: number): Observable<any> {
    return this.http.delete(this.products_url+ id);
  }
}