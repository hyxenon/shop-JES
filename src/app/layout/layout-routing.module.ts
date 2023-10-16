import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard', pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'user-management',
        loadChildren: () => import('./users-management/users-management.module').then(mod => mod.UsersManagementModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule)
      }
    ]
  },
  
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
