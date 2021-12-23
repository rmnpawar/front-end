import { Component } from '@angular/core';
import {cols, data} from './data';

@Component({
  selector: 'app-table',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cols = cols;
  data = data;

  title = 'table';

  log(event) {
    console.log(event);
  }
}
