import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImagespComponent } from './imagesp/imagesp.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'imagesp', component: ImagespComponent },
  ]),  
  ]
})
export class ImagespModule { }
