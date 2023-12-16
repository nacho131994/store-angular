import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListComponent,
    ConfirmationModalComponent,
 
    // ...otros componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // ...otros módulos
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
