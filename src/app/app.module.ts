import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaitersComponent } from './components/waiters/waiters.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MenuComponent } from './components/menu/menu.component';
import { CuisinesComponent } from './components/cuisines/cuisines.component';
import { OrderTypeComponent } from './components/order-type/order-type.component';
import { SideBarMenuComponent } from './components/side-bar-menu/side-bar-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FirebaseService } from './services/firebase.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './components/shop/shop.component';


@NgModule({
  declarations: [
    AppComponent,
    WaitersComponent,
    OrdersComponent,
    MenuComponent,
    CuisinesComponent,
    OrderTypeComponent,
    SideBarMenuComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ShopComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBMXnSq-4n2iL2QgP4-e6RjNCTwiqxCMxA",
      authDomain: "easyeatsdashboard.firebaseapp.com",
      projectId: "easyeatsdashboard",
      storageBucket: "easyeatsdashboard.appspot.com",
      messagingSenderId: "760201614501",
      appId: "1:760201614501:web:c797789332639d90ad294c",
      measurementId: "G-60PSHNTD1E"
    }),
    NgbModule,
    FormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
