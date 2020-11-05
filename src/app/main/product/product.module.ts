import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'product',
        component: ProductComponent
      },
  ]),  
  ]
})
export class ProductModule { }
