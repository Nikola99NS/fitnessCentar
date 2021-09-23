import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  template: `

  <app-header></app-header>
  <section class="hero is-primary is-bold">
  <div class="hero-body">
      <div class="container">
          <h1 class="title is-1 has-text-centered">Uspešno ste se izlogovali</h1>
      </div>
  </div>
</section>
<div class="has-background-primary-light">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>
  `,
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem("token")
    localStorage.removeItem("trenutniUser")
  }

}
