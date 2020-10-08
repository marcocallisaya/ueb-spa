import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TypeProductComponent } from './Components/type-product/type-product.component';
import { HeaderComponent } from './Components/header/header.component';
import { TypeProductFormComponent } from './Components/type-product-form/type-product-form.component';
import { ProductFormComponent } from './Components/product-form/product-form.component';
import { ProductComponent } from './Components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TypeProductComponent,
    HeaderComponent,
    TypeProductFormComponent,
    ProductFormComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
