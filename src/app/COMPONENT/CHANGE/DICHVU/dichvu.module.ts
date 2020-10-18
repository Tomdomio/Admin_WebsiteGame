import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuaComponent } from './sua/sua.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { ThemComponent } from './them/them.component';

const routesConfig: Routes =[
  { path: 'themdv', component: ThemComponent },
  { path: 'danhsachdv', component: DanhsachComponent},
  { path: 'suadv', component: SuaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig)
  ]
})
export class DICHVUModule { }
