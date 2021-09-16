import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../Service/category.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  @Input('category') category: any;
  @Output('categorydelete') categorydelete = new EventEmitter();

  updateSubscription: Subscription = new Subscription();
  editing: boolean = false;

  constructor(private cs: CategoryService, private router: Router) { 
  }

  edit() {
    this.editing = true;
  }

  update(value) {
   // console.log(this.category);
    this.updateSubscription = this.cs.update(value, this.category.id)
    .subscribe(res => {
      this.editing = false;
      this.category = res;
    });
    
  }

  delete() {
    this.cs.delete(this.category.id).toPromise()
    .then(res => {
      this.categorydelete.emit(this.category.id);
    });
  }

  ngOnInit(): void {
   
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

}
