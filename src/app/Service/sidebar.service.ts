import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  items: any[] = [{"name": 'Categories', "link": "/categories"}, {"name": 'Sections', "link": "/sections"}, {"name": "Products", "link": "/products"}];
  private subject = new Subject<any>();

  constructor() {
    this.sendItems([]);
   }

  sendItems(items:any[]) {
    if (items.length == 0) {
      this.subject.next(this.items);
    }
    else {
      this.subject.next(items);
    }
    
  }

  getItems(): Observable<any> {
    return this.subject.asObservable();
  }
}
