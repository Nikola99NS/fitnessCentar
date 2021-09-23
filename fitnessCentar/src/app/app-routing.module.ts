import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenovnikComponent } from './cenovnik/cenovnik/cenovnik.component';
import { GrupniTreningComponent } from './grupni-trening/grupni-trening.component';
import { AuthGuard } from './guard/auth.guard';
// import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './reg/register/register.component';
import { ShopComponent } from './shop/shop.component';
import { TreneriListComponent } from './treneri/treneri-list/treneri-list.component';


const routes:Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
{
  path:'home', component: HomeComponent,canActivate: [AuthGuard]
},
{
  path:'login',  component: LoginComponent
},
{
  path:'logOut',  component: LogoutComponent
},
{
  path:'grupni',component:GrupniTreningComponent,canActivate: [AuthGuard]
},
{
  // path:'users',  loadChildren:() => import('./users/users.module').then(mod => mod.UsersModule),  canActivate: [AuthGuard]
  // component: UserListComponent
  path:'treneri', component:TreneriListComponent,canActivate: [AuthGuard]
},
{
  path:'register', component:RegisterComponent,
},
{
  path: 'cenovnik' , component:CenovnikComponent,canActivate: [AuthGuard]
},
{
  path:'shop',component:ShopComponent,canActivate: [AuthGuard]
},

{ path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
