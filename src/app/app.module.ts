import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENT/UNCHANGED/header/header.component';
import { FooterComponent } from './COMPONENT/UNCHANGED/footer/footer.component';
import { MenuComponent } from './COMPONENT/UNCHANGED/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
        HeaderComponent,
        AppComponent,
        FooterComponent,
        MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
