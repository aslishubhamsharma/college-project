import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FacebookComponent } from './facebook/facebook.component';
import { InstagramComponent } from './instagram/instagram.component';
import { TwitterComponent } from './twitter/twitter.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { CarrerComponent } from './carrer/carrer.component';
import { DemandComponent } from './demand/demand.component';
import { MobileComponent } from './mobile/mobile.component';


// this is modified

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeComponent,
    FooterComponent,
    HeaderComponent,
    FacebookComponent,
    InstagramComponent,
    TwitterComponent,
    LoginComponent,
    AboutComponent,
    KnowmoreComponent,
    CarrerComponent,
    DemandComponent,
    MobileComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
