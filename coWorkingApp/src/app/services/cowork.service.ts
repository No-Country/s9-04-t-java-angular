import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoworkService {

  http = inject(HttpClient);

  selectedProduct: BehaviorSubject<any> = new BehaviorSubject(undefined);

  getProduct(id: number) {
    this.http.get(`https://dummyjson.com/products/${id}`).subscribe({
      next: (res) => {
        this.selectedProduct.next(res);
      }
    });
  }

  getProductObservable() {
    return this.selectedProduct.asObservable();
  }
  


}
