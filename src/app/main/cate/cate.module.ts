import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CateComponent } from './cate/cate.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CateComponent, CateComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'cate', component: CateComponent },
  ]),  
  ]
})
export class CateModule { }
