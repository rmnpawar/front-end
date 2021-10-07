import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './Service/authentication.service';
import { UserComponent } from './User/user/user.component';
import { LoginFormComponent } from './User/login-form/login-form.component';
import { SidebarComponent } from './Main/sidebar/sidebar.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AuthGuard } from './Service/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Dashboard/navbar/navbar.component';
import { AuthorizedHttpService } from './authorized-http.service';
import { CategoriesComponent } from './Categories/categories/categories.component';
import { CategoryComponent } from './Categories/category/category.component';
import { ProductsComponent } from './Products/products/products.component';
import { ProductComponent } from './Products/product/product.component';
import { SectionsComponent } from './Sections/sections/sections.component';
import { SectionComponent } from './Sections/section/section.component';
import { CategoryService } from './Service/category.service';
import { CreateFormComponent } from './Categories/create-form/create-form.component';
import { SectionService } from './Service/section.service';
import { ClickStopPropagationDirective } from './Directive/click-stop-propagation.directive';
import { SidebarService } from './Service/sidebar.service';
import { ProductService } from './Service/product.service';
import { EditFormComponent } from './Products/edit-form/edit-form.component';
import { BrandService } from './Service/brand.service';
import { SuppliersComponent } from './Supplier/suppliers/suppliers.component';
import { SupplierService } from './Service/supplier.service';
import { AddInvoiceComponent } from './Invoice/add-invoice/add-invoice.component';
import { InvoicesComponent } from './Invoice/invoices/invoices.component';
import { ProcessComponent } from './Invoice/process/process.component';
import { InvoiceItemComponent } from './Invoice/invoice-item/invoice-item.component';
import { InvoiceService } from './Service/invoice.service';
import { InvoiceDetailsComponent } from './Invoice/invoice-details/invoice-details.component';
import { RequestService } from './Service/request.service';
import { AssetRequestComponent } from './Request/asset-request/asset-request.component';
import { ConsumableRequestComponent } from './Request/consumable-request/consumable-request.component';
import { AssetService } from './Service/asset.service';
import { AdminViewComponent } from './Request/admin-view/admin-view.component';
import { AssetsComponent } from './Asset/assets/assets.component';
import { AssetListComponent } from './Asset/asset-list/asset-list.component';
import { SubCategoryCreateComponent } from './Categories/sub-category-create/sub-category-create.component';
import { SubCategoriesComponent } from './Categories/sub-categories/sub-categories.component';
import { RequestDashboardComponent } from './Dashboard/request-dashboard/request-dashboard.component';
import { RequestViewComponent } from './Request/request-view/request-view.component';
import { ConsumableRequestViewComponent } from './Request/consumable-request-view/consumable-request-view.component';
import { RequestIssueComponent } from './Request/request-issue/request-issue.component';
import { AssetRequestIssueComponent } from './Request/asset-request-issue/asset-request-issue.component';
import { ConsumableRequestIssueComponent } from './Request/consumable-request-issue/consumable-request-issue.component';
import { ConsumableHistoryComponent } from './Reports/consumable-history/consumable-history.component';
import { AssetHistoryComponent } from './Reports/asset-history/asset-history.component';
import { ModalComponent } from './ui/modal/modal.component';
import { RepairHistoryComponent } from './Reports/repair-history/repair-history.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginFormComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductsComponent,
    ProductComponent,
    SectionsComponent,
    SectionComponent,
    CreateFormComponent,
    ClickStopPropagationDirective,
    EditFormComponent,
    SuppliersComponent,
    AddInvoiceComponent,
    InvoicesComponent,
    ProcessComponent,
    InvoiceItemComponent,
    InvoiceDetailsComponent,
    AssetRequestComponent,
    ConsumableRequestComponent,
    AdminViewComponent,
    AssetsComponent,
    AssetListComponent,
    SubCategoryCreateComponent,
    SubCategoriesComponent,
    RequestDashboardComponent,
    RequestViewComponent,
    ConsumableRequestViewComponent,
    RequestIssueComponent,
    AssetRequestIssueComponent,
    ConsumableRequestIssueComponent,
    ConsumableHistoryComponent,
    AssetHistoryComponent,
    ModalComponent,
    RepairHistoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    AuthorizedHttpService,
    CategoryService,
    SectionService,
    ProductService,
    SidebarService,
    BrandService,
    SupplierService,
    InvoiceService,
    RequestService,
    AssetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
