import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './COMPONENT/CHANGE/home/home.component';

const routesConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch :'full'},
  { path: 'home', component: HomeComponent }
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
