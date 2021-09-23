import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <section class="hero is-success ">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
      <header class="navbar">
          <div class="container">
              <div class="navbar-brand">
                  <a class="navbar-item">
                      <i class="fa fa-qrcode fa-2x"></i>
                      <h1 class="px-1"> DOBRODOŠLI NA NAŠ SAJT!</h1>
                  </a>
                  <span class="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
                  <span></span>
                  <span></span>
                  </span>
              </div>
              <div id="navbarMenuHeroC" class="navbar-menu">
                  <div class="navbar-end">
                      <a class="navbar-item" routerLink="/home" routerLinkActive="active">
                          <i class="fa fa-home fa-2x"></i> Home
                      </a>
                      <a class="navbar-item" routerLink="/login" routerLinkActive="active" >
                      <i class="fa fa-check  "></i>Uloguj se
          </a>
          <a class="navbar-item" routerLink="/register" routerLinkActive="active">
          <i class="fa fa-plus px-1 "></i>Napravi nalog
</a>
                      <a class="navbar-item" routerLink="/grupni">
                      <i class="fa fa-heartbeat px-1"></i> Rezerviši grupni trening
            </a>
          
                      <a class="navbar-item" routerLink="/treneri" routerLinkActive="active">
                          <i class="fa fa-male fa-2x"></i>
                          <label class="px-1">Treneri</label>
                      </a>
                      <a class="navbar-item" routerLink="/cenovnik" routerLinkActive="active">
                          <i class="fa fa-address-book "></i>
                          <label class="px-1">Cenovnik</label>
                      </a>
                      <a class="navbar-item" routerLink="/shop" routerLinkActive="active">
                          <i class="fa fa-shopping-cart"></i>
                          <label class="px-1">Shop</label>
                      </a>
                      <a class="navbar-item" routerLink="/logOut" routerLinkActive="active">
                         <i class="fa fa-arrow-right"></i>
                         <label class="px-1">Log out</label>
                      </a>
                  </div>
              </div>
          </div>
      </header>
  </div>
</section>

  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}
