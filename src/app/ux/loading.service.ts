import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  subject: Subject<boolean> = new Subject();

  constructor() { 
    
  }

  public getSubject() {
    return this.subject;
  }

  public setStatus(status: boolean) {
    this.subject.next(status);
  }
}
