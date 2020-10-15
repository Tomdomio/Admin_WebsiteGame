import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './COMPONENT/UNCHANGED/header/header.component';
import { FooterComponent } from './COMPONENT/UNCHANGED/footer/footer.component';
import { MenuComponent } from './COMPONENT/UNCHANGED/menu/menu.component';
import { PageNotFoundComponent } from './COMPONENT/UNCHANGED/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
        HeaderComponent,
        AppComponent,
        FooterComponent,
        MenuComponent,
        PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
