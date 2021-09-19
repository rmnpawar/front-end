import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
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

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginFormComponent},
  { path: 'categories/create', component: CreateFormComponent, canActivate: [AuthGuard]},
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]},
  { path: 'sub_categories/create', component: SubCategoryCreateComponent, canActivate: [AuthGuard]},
  { path: 'sub_categories', component: SubCategoriesComponent, canActivate: [AuthGuard]},
  { path: 'sections', component: SectionsComponent, canActivate: [AuthGuard]},
  { path: 'products/create', component: EditFormComponent, canActivate: [AuthGuard]},
  { path: 'products/:id', component: EditFormComponent, canActivate: [AuthGuard]},
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  { path: 'suppliers', component: SuppliersComponent, canActivate: [AuthGuard]},
  { path: 'invoices/create', component: AddInvoiceComponent, canActivate: [AuthGuard]},
  { path: 'invoices/:id/process', component: ProcessComponent, canActivate: [AuthGuard]},
  { path: 'invoices/:id', component: InvoiceDetailsComponent, canActivate: [AuthGuard]},
  { path: 'invoices', component: InvoicesComponent, canActivate: [AuthGuard]},
  //{ path: 'requests', component: AdminViewComponent, canActivate: [AuthGuard]},
  { path: 'all-assets', component: AssetsComponent, canActivate: [AuthGuard]},
  { path: 'assets-list', component: AssetListComponent, canActivate: [AuthGuard]},

  { path: 'requests', component: RequestDashboardComponent, canActivate: [AuthGuard] },
];


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
    RequestViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

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
