import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderIntercepter } from './loader.intercepter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { HeaderComponent } from './header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartModalComponent,
    EmptyCartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
   
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  entryComponents: [CartModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
