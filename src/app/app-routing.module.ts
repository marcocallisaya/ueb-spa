import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeProductFormComponent } from './Components/type-product-form/type-product-form.component';
import { TypeProductComponent } from './Components/type-product/type-product.component';


const routes: Routes = [
  {path: 'type', component: TypeProductComponent},
  {path: 'type-form', component: TypeProductFormComponent},
  {path: 'type-form/:id', component: TypeProductFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
