import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LoginComponent} from './login/login.component'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { AuthInterceptor } from './utils/auth-interceptor';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UserNavbarComponent } from './user-dashboard/user-navbar/user-navbar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin-dashboard/admin-navbar/admin-navbar.component';
import { AuthGuard} from './auth.guard'



const routes: Routes = [
  { 
    path: 'home',
    component: LoginComponent
   },
  { 
    path: 'user-dashboard' ,
    component: UserDashboardComponent,
    canActivate:[AuthGuard],
    data : {
      role : 'User'
    }
  },
   
  { 
    path: 'finance-dashboard',
     component: AdminDashboardComponent,
     canActivate:[AuthGuard],
     data:{
       role: 'Admin'
     }
    },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


