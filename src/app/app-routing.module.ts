import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employees/employee/employee.component'; 
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { CarrerComponent } from './carrer/carrer.component';
import { DemandComponent } from './demand/demand.component';
import { MobileComponent } from './mobile/mobile.component';


const routes: Routes = [


  {path:'employee',component:EmployeeComponent},
  {path:'carrer',component:CarrerComponent},
  {path:'about',component:AboutComponent},
  {path:'about/knowmore',component:KnowmoreComponent},
  {path:'about/demand',component:DemandComponent},
  {path:'about/mobile',component:MobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
