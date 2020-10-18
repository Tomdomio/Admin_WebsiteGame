import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ThemComponent } from './them/them.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { SuaComponent } from './sua/sua.component';


const routesConfig: Routes =[
  { path: 'themsp', component: ThemComponent },

  { path: 'danhsachsp', component: DanhsachComponent},
  
  { path: 'suasp', component: SuaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig)
  ]
})
export class SANPHAMModule { }
