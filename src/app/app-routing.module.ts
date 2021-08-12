import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisinesComponent } from './components/cuisines/cuisines.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderTypeComponent } from './components/order-type/order-type.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';
import { WaitersComponent } from './components/waiters/waiters.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'waiters', component:WaitersComponent},
  {path:'orders',component:OrdersComponent},
  {path:'menu',component:MenuComponent},
  {path:'cuisines',component:CuisinesComponent},
  {path:'orderType', component:OrderTypeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
