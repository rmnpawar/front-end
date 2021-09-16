import { Component, OnInit } from '@angular/core';
import { SectionService } from '../../Service/section.service';

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  sections = [];
  constructor() {
   }

  ngOnInit(): void {
  }

}
