import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../Service/category.service';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  constructor(private cs: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  create(value) {
    if (value.consumable == "") value.consumable = 0;
    this.cs.create(value).subscribe(res => {
      this.router.navigate(['/categories']);
    });
  }

}
