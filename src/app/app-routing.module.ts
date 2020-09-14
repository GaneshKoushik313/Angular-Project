import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCafetariaComponent} from './add-cafetaria/add-cafetaria.component';
import { UpdateCafetariaComponent } from './update-cafetaria/update-cafetaria.component';
import { ListCafetariaComponent } from './list-cafetaria/list-cafetaria.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: "add",
        component: AddCafetariaComponent
    },
    {
        path: "update",
        component: UpdateCafetariaComponent
    },
    {
        path: "",
        component: ListCafetariaComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
