import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderDirective, TemplateHeaderDirective } from './table/template-header.directive';
import { TableHeaderComponent } from './table/table-header/table-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TemplateHeaderDirective,
    HeaderDirective,
    TableHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    TableHeaderComponent,

    TemplateHeaderDirective,
    HeaderDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CustomTableModule { }
