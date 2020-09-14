import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCafetariaComponent } from './add-cafetaria/add-cafetaria.component';
import { UpdateCafetariaComponent } from './update-cafetaria/update-cafetaria.component';
import { ListCafetariaComponent } from './list-cafetaria/list-cafetaria.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCafetariaComponent,
    UpdateCafetariaComponent,
    ListCafetariaComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
