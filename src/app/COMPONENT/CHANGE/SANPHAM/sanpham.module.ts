import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ThemComponent } from './them/them.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { SuaComponent } from './sua/sua.component';
import { FormsModule } from '@angular/forms';


const routesConfig: Routes =[
  { path: 'themsp', component: ThemComponent },

  { path: 'danhsachsp', component: DanhsachComponent},
  
  { path: 'suasp', component: SuaComponent}
];

@NgModule({
  declarations: [ 
    ThemComponent, 
    DanhsachComponent,
    SuaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig),
    FormsModule
  ]
})
export class SANPHAMModule { }
