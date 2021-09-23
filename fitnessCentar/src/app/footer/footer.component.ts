import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <!-- Hero footer: will stick at the bottom -->
  <!-- <section class="hero is-success">
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active"><a>Overview</a></li>
            <li><a>Modifiers</a></li>
            <li><a>Grid</a></li>
            <li><a>Elements</a></li>
            <li><a>Components</a></li>
            <li><a>Layout</a></li>
          </ul>
        </div>
      </nav>
    </div>
    </section> -->
  <div class="card  has-background-success">
      <br>
      <p class="has-text-centered px-6 has-text-white  title is-4"><i class="fa fa-qrcode fa-5x px-2 mb-2 has-text-white title is-1 "></i>CODE FITNESS CENTAR</p>
      <p class=" has-text-centered has-text-white "><i class="fa fa-map-marker"></i> 2100 Novi Sad, Novosadska 221 </p>
      <p class=" has-text-centered has-text-white "><i class="fa fa-facebook px-1"></i>Facebook: @Code fitness centar </p>
      <p class=" has-text-centered has-text-white "><i class="fa fa-instagram px-1"></i>Instagram: @Code.fitness.centar </p>
      <p class=" has-text-centered has-text-white mr-6"><i class="fa fa-phone px-1"></i>Phone: 0215432185 </p>
      <p class=" has-text-centered has-text-white "><i class="fa fa-envelope-square px-1"></i>Email: codefitness@gmail.com </p>
      <br>
  </div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
