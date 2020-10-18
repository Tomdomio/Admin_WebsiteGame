import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThemComponent } from './them/them.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { FormsModule } from '@angular/forms';

const routesConfig: Routes =[
  { path: 'themloai', component: ThemComponent },
  
  { path: 'danhsachloai', component: DanhsachComponent}
];

@NgModule({
  declarations: [ThemComponent,DanhsachComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig),FormsModule
  ]
})
export class THELOAIModule { }
