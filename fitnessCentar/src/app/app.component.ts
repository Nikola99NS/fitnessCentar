import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <!--<app-login></app-login>-->
 <!-- <app-header></app-header> -->
  <router-outlet></router-outlet>
  
  `,
  styles: []
})
export class AppComponent {
  title = 'fitness center';
  constructor(){
  }


}
