import { ThrowStmt } from '@angular/compiler';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { ChangeDetectionStrategy, Component, ContentChildren, Input, OnInit, Query, QueryList } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { HeaderDirective, TemplateHeaderDirective } from './template-header.directive';

const constants = {
  PAGE_SIZE: 5,
  TEMPLATE: {
    header: "header",
    body: "body",
    actions: "actions"
  }
}


@Component({
  selector: 'a-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {

  @Input() cols = [];
  @Input() data: any[] = [];
  @Input() pageSize = constants.PAGE_SIZE;
  @Input() actions: boolean = false;

  // @ContentChildren(TemplateHeaderDirective, { read: TemplateHeaderDirective}) public templates: QueryList<TemplateHeaderDirective>;

  @ContentChildren(TemplateHeaderDirective, {read: TemplateHeaderDirective}) templates: QueryList<TemplateHeaderDirective>;
  @ContentChildren(HeaderDirective, {read: HeaderDirective}) actionTemplates: QueryList<HeaderDirective>;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  public TEMPLATE = constants.TEMPLATE;

  public example = ['header', 'body', 'actions'];

  page = 0;
  items: any[] = [];
  pageData = {} as {
    start: number,
    end: number
  }

  filteredData: any[] = [];
  appliedFilters: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredData = this.data;
    this.initPagination();
  }

  private initPagination(): void {
    this.paginate(this.page, this.pageSize);
  }

  public get tableHeight() {
    let rowHeight = 50;

    return {
      height: `${(rowHeight) * (this.pageSize + 1) }px`
    }
  }

  public get size() {
    return this.filteredData.length;
  }

  public get totalPages() {
    return Math.ceil(this.size / this.pageSize);
  }

  private paginate(page: number, pageSize: number): void {
    const startPosition = page * pageSize;
    let endPosition = startPosition + pageSize;

    if (endPosition > this.size) {
      endPosition -= endPosition - this.size;
    }

    this.saveCalculatedPosition(startPosition, endPosition);

    this.items = this.filteredData.slice(startPosition, endPosition);
  }

  private saveCalculatedPosition(start: number, end: number) {
    this.pageData = {
      ...this.pageData,
      start,
      end
    }
  }

  prev() {
    if (this.page > 0) {
      this.page -= 1;
      this.paginate(this.page, this.pageSize);
    }
  }

  next() {
    if (this.page < this.totalPages - 1) {
      this.page += 1;
      this.paginate(this.page, this.pageSize);
    }
  }



  // filtering logic
  filter(currentValue: {fieldName: string, value: string}) {
    this.filteredData = this.data;

    let index = this.appliedFilters.map(filter => filter.fieldName).indexOf(currentValue.fieldName);

    if (index > -1) {
      this.appliedFilters[index] = currentValue;
    } else {
      this.appliedFilters.push(currentValue);
    }

    this.appliedFilters.forEach(filter => {
      this.filterFromValue(filter, this.filteredData);
    })
    this.initPagination();
  }

  private filterFromValue(value: {fieldName: string, value: string}, data: any[]) {
    this.filteredData = data.filter(item => {
      return item[value.fieldName].includes(value.value);
    });
  }

  public log() {
    console.log("Log called");
  }
}
