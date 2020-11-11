import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DichvuComponent } from './dichvu/dichvu.component';

@NgModule({
  declarations: [DichvuComponent, DichvuComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'dichvu', component: DichvuComponent },
  ]),  
  ]
})
export class DichvuModule { }
