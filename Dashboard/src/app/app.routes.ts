import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component:  ProductListComponent},
    { path: 'orders', component: OrderListComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}