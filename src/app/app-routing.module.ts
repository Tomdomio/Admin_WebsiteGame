import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './COMPONENT/CHANGE/home/home.component';
import { PageNotFoundComponent } from './COMPONENT/UNCHANGED/page-not-found/page-not-found.component';

import { SANPHAMModule } from './COMPONENT/CHANGE/SANPHAM/sanpham.module';
import { DICHVUModule } from './COMPONENT/CHANGE/DICHVU/dichvu.module';
import { USERModule } from './COMPONENT/CHANGE/USER/user.module';
import { ANHSPModule } from './COMPONENT/CHANGE/ANHSP/anhsp.module';
import { THELOAIModule } from './COMPONENT/CHANGE/THELOAI/theloai.module';


const routesConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch :'full'},
  { path: 'home', component: HomeComponent },
//Thể Loại
  {path:'theloai', loadChildren:() => import('./COMPONENT/CHANGE/THELOAI/theloai.module').then(m => m.THELOAIModule)},
//Sản Phẩm
  {path:'sanpham', loadChildren:() => import('./COMPONENT/CHANGE/SANPHAM/sanpham.module').then(m => m.SANPHAMModule)},
//Dịch Vụ
  {path:'dichvu', loadChildren:() => import('./COMPONENT/CHANGE/DICHVU/dichvu.module').then(m => m.DICHVUModule)},
//ẢnhSP
  {path:'anhsp', loadChildren:() => import('./COMPONENT/CHANGE/ANHSP/anhsp.module').then(m => m.ANHSPModule)},
//User   
  {path:'user', loadChildren:() => import('./COMPONENT/CHANGE/USER/user.module').then(m => m.USERModule)},

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    THELOAIModule,
    SANPHAMModule,
    ANHSPModule,
    DICHVUModule,
    USERModule,
    RouterModule.forRoot(routesConfig)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
