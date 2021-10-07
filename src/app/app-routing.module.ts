import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fadeInAnimation } from './animations/fade-in.animation';
import { AssetListComponent } from './Asset/asset-list/asset-list.component';
import { AssetsComponent } from './Asset/assets/assets.component';
import { CategoriesComponent } from './Categories/categories/categories.component';
import { CreateFormComponent } from './Categories/create-form/create-form.component';
import { SubCategoriesComponent } from './Categories/sub-categories/sub-categories.component';
import { SubCategoryCreateComponent } from './Categories/sub-category-create/sub-category-create.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AddInvoiceComponent } from './Invoice/add-invoice/add-invoice.component';
import { InvoiceDetailsComponent } from './Invoice/invoice-details/invoice-details.component';
import { InvoicesComponent } from './Invoice/invoices/invoices.component';
import { ProcessComponent } from './Invoice/process/process.component';
import { EditFormComponent } from './Products/edit-form/edit-form.component';
import { ProductsComponent } from './Products/products/products.component';
import { AssetHistoryComponent } from './Reports/asset-history/asset-history.component';
import { ConsumableHistoryComponent } from './Reports/consumable-history/consumable-history.component';
import { RequestViewComponent } from './Request/request-view/request-view.component';
import { SectionsComponent } from './Sections/sections/sections.component';
import { AuthGuard } from './Service/auth-guard.service';
import { SuppliersComponent } from './Supplier/suppliers/suppliers.component';
import { LoginFormComponent } from './User/login-form/login-form.component';
import { RepairHistoryComponent } from './Reports/repair-history/repair-history.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard], data: {animation: "Dashboard"}},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {animation: "Dashboard"}},
  { path: 'login', component: LoginFormComponent},
  { path: 'categories/create', component: CreateFormComponent, canActivate: [AuthGuard]},
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]},
  { path: 'sub_categories/create', component: SubCategoryCreateComponent, canActivate: [AuthGuard]},
  { path: 'sub_categories', component: SubCategoriesComponent, canActivate: [AuthGuard]},
  { path: 'sections', component: SectionsComponent, canActivate: [AuthGuard], data: [{animation: 'fadeInAnimation'}]},
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
  { path: 'assets-list', component: AssetListComponent, canActivate: [AuthGuard],
    children: [
      { path: 'asset-history/:id', component: AssetHistoryComponent },
      { path: 'repair-history/:id', component: RepairHistoryComponent },
    ]},

  { path: 'requests', component: RequestViewComponent, canActivate: [AuthGuard] },

  { path: 'reports', component: ConsumableHistoryComponent, canActivate: [AuthGuard], data: {animation: "Report"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
