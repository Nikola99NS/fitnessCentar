import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegLoginService } from 'src/app/services/reg-login.service';
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-login',
  
template:`

  <app-header></app-header>


<section class="hero is-primary is-bold">
    <div class="hero-body">
        <div class="container">
            <h1 class="title is-4">Dobrodošli u fitness centar Code</h1>
            <h1 class="title">Uloguj se! Nemaš nalog? <a href="http://localhost:4200/register">Klikni ovde</a><i class="fa fa-mouse-pointer px-2"></i></h1>
        </div>
    </div>
</section>
<div class="has-background-success-light">
<section class="section">
    <div class="container">
        <form (ngSubmit)="login()">

            <div class="field">
                <label class="label">User name</label><i class="fa fa-user fa-2x px-1"></i>
                <input class="input is-primary" style="width: 33%;" type="text" placeholder="Username" required name="username" [(ngModel)]="username">
            </div>

            <div class="field">
                <label class="label">Password </label><i class="fa fa-user fa-2x px-1"></i> 
                <input class="input is-primary" style="width: 33%;" type="number" placeholder="Password" required name="password" [(ngModel)]="password">
            </div>

           
            <button type="submit" class="button is-medium is-warning">
        Log in!
   
     </button>
        </form>
      
    </div>
</section>
<br><br><br><br><br><br><br>
</div>
`,
styles:['fieldset { margin: 0;padding: 0;border: none; }']
})
export class LoginComponent implements OnInit {

username: string='';
password: number;
message: string;


constructor(private service:RegLoginService,private router: Router) { }

ngOnInit(): void {
}

getUsername():string{
    return this.username
}

login() {
  this.service.login(this.username, this.password).subscribe(resp =>{
    localStorage.setItem("token", resp.token),
    localStorage.setItem("trenutniUser", JSON.stringify(resp.trenutniUser.username)),
    localStorage.setItem("pin",resp.pin)
    console.log(resp.pin)
    alert(resp.msg),
    this.router.navigate(['home'])
  })
}
}
