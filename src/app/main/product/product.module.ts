import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'product',
        component: ProductComponent
      },
  ]),  
  ]
})
export class ProductModule { }
