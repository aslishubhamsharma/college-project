import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employees/employee/employee.component'; 
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [


  {path:'employee',component:EmployeeComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
