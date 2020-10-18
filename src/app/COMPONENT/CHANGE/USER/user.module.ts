import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { ThemComponent } from './them/them.component';

const routesConfig: Routes =[
  { path: 'danhsachuser', component: DanhsachComponent},

  { path: 'themuser', component: ThemComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig)
  ]
})
export class USERModule { }
