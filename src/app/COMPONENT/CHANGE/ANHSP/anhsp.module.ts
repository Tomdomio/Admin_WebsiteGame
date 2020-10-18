import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ThemComponent } from './them/them.component';
import { DanhsachComponent } from './danhsach/danhsach.component';

const routesConfig: Routes =[
  { path: 'danhsachanhsp', component: DanhsachComponent},

  { path: 'themanhsp', component: ThemComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig)
  ]
})
export class ANHSPModule { }
