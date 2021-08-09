import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

import { ShopComponent } from './shop/shop.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShopFormComponent } from './shop-form/shop-form.component';
import {HttpClientModule} from '@angular/common/http';
import { WaitersComponent } from './waiters/waiters.component';

// import {GetApiService} from './get-api.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuFormComponent,
    MenuComponent,
    MenuDetailComponent,
    ShopComponent,
    ShopDetailComponent,
    ShopFormComponent,
    WaitersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
