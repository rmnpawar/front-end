import { NONE_TYPE } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';
import { SectionService } from '../../Service/section.service';

@Component({
  selector: 'sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  sections;
  currSection = {};
  showDialog = false;
  message = null;

  constructor(private ss: SectionService) { 
  }

  openDialog(section) {
    this.currSection = section;
    this.showDialog = true;
  }

  doNothing(event) {
    event.stopPropagation();
  }

  async ngOnInit() {
    this.sections = await this.ss.getAll();
  }

  close() {
    this.showDialog = false;
    this.currSection = null;
    this.message = null;
  }

  updateSection() {
    this.ss.update(this.currSection)
    .subscribe(res => {
      this.message = "Updated successfully";
    })
  }

  createSection(name) {
    this.ss.create(name).subscribe(res => true);
  }

  deleteSection(id) {
    this.ss.delete(id).subscribe(res => true);
  }
 
}
