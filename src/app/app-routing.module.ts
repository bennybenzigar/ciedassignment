import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuardService } from './services/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{path:'', redirectTo:'login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'dashboard', component:DashboardComponent, canActivate:[authGuardService]},
// {path:'dashboard', component:DashboardComponent},
{path:'**', redirectTo:'pagenotfound'},
{path:'pagenotfound', component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
