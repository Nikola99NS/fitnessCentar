import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-header></app-header>
  <section class="hero is-large is-success">
  <div class="hero-body">
    <div class="container has-text-centered">
       <span class="tag is-success subtitle is-2 is-rounded"><i class="fa fa-qrcode fa-2x  px-2"></i>CODE FITNESS CENTAR</span>
    </div>
  </div>

</section>

<app-footer></app-footer>
  `,
  styles: [`
    .hero { 
      background-image: url("https://t4.ftcdn.net/jpg/01/02/52/85/360_F_102528599_AplcCB8cmMECbcrZYtUvN7WB8GJKAcXB.jpg") !important;
      background-size: cover;
      background-position: center center;
    }`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
