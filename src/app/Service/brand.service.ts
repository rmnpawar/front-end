import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  brands;
  base_url = "http://localhost:8000/api/brands"

  constructor(private auth: AuthenticationService) {
    auth.http.Get(this.base_url)
    .subscribe(brands => {
      this.brands = brands;
    });
   }

   getAll() {
     return this.brands;
   }
}
