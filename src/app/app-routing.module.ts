import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './COMPONENT/CHANGE/home/home.component';
import { ThemComponent } from './COMPONENT/CHANGE/THELOAI/them/them.component';
import { DanhsachComponent } from './COMPONENT/CHANGE/THELOAI/danhsach/danhsach.component';
import { PageNotFoundComponent } from './COMPONENT/UNCHANGED/page-not-found/page-not-found.component';


const routesConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch :'full'},
  { path: 'home', component: HomeComponent },
  { path: 'themtheloai', component: ThemComponent },
  { path: 'danhsachloai', component: DanhsachComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routesConfig)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
