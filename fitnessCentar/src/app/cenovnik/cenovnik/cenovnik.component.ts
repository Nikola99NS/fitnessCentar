import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from 'src/app/reg/register/register.component';

@Component({
  selector: 'app-cenovnik',
  template: `
  <app-header></app-header>
  <section class="hero is-primary is-bold">
      <div class="hero-body">
          <div class="container">
              <h1 class="title is-1 has-text-centered">CENOVNIK</h1>
          </div>
      </div>
  </section>
  <br>
  
  <div class="has-background-success-light">
  
      <div class='columns is-multiline'>
          <div class='column is-4'>
              <div class="card has-background-info">
                  <p class="has-text-centered has-text-white mb-3 title is-3">STANDARD</p>
                  <p class="has-text-centered  has-text-white mb-0 title is-1">2990 RSD</p>
                  <p class=" has-text-centered has-text-white title is-4">mesečno</p>
                  <p class=" has-text-centered has-text-white mb-0 title is-5 ">00-24 <i class="fa fa-check  "></i></p>
                  <p class=" has-text-centered has-text-white  mb-0 title is-5">Neograničeno <i class="fa fa-check  "></i></p>
                  <p class=" has-text-centered has-text-white mb-0 title is-5">Teretana <i class="fa fa-check"></i></p>
                  <p class=" has-text-centered has-text-white mb-0 title is-5">Kardio <i class="fa fa-check"></i></p>
                  <p class=" has-text-centered has-text-white mb-0 title is-5">Ženska zona <i class="fa fa-check"></i></p>
                  <p class=" has-text-centered has-text-white mb-3 title is-5">Svi grupni treninzi <i class="fa fa-check"></i></p>
                  <button class="button is-primary" (click)="onSave('standard')">Kupi odmah</button>
              </div>
          </div>
          <div class='column is-4'>
              <div class="card has-background-warning">
                  <p class="has-text-centered has-text-white mb-3 title is-3">STUDENT</p>
                  <p class="has-text-centered has-text-white mb-0 title is-1">2490 RSD</p>
                  <p class=" has-text-centered has-text-white title is-4">mesečno</p>
                  <p class=" has-text-centered has-text-white mb-0 title is-5 ">00-24 <i class="fa fa-check  "></i></p>
                  <p class=" has-text-centered has-text-white  mb-0 title is-5">Neograničeno <i class="fa fa-check  "></i></p>
                  <p class=" has-text-centered has-text-white mb-0 title is-5">Teretana <i class="fa fa-check"></i></p>
                  <p class=" has-text-centered has-text-white mb-0 title is-5">Kardio <i class="fa fa-check"></i></p>
                  <p class=" has-text-centered has-text-white mb-0 title is-5">Ženska zona <i class="fa fa-check"></i></p>
                  <p class=" has-text-centered has-text-white mb-3 title is-5">Svi grupni treninzi <i class="fa fa-check"></i></p>
                  <button class="button is-primary" (click)="onSave('student')">Kupi odmah</button>
              </div>
          </div>
          <div class='column is-4'>
              <div class="card  has-background-danger">
                  <p class="has-text-centered has-text-white mb-3 title is-3">DNEVNA</p>
                  <p class="has-text-centered has-text-white mb-0 title is-1">2190 RSD</p>
                  <p class=" has-text-centered has-text-white title is-4">mesečno</p>
                  <p class=" has-text-centered has-text-white mb-0 title is-5 ">06-16 <i class="fa fa-check  "></i></p>
                  <p class=" has-text-centered has-text-white mb-0 title is-5">Teretana <i class="fa fa-check"></i></p>
                  <p class=" has-text-centered has-text-white mb-0 title is-5">Kardio <i class="fa fa-check"></i></p>
                  <p class=" has-text-centered has-text-white mb-6 title is-5">Ženska zona <i class="fa fa-check"></i></p>
                  <button class="button is-primary" (click)="onSave('dnevna')">Kupi odmah</button>
              </div>
          </div>
      </div>
      <div *ngIf="kupi==='.'">
          <form (ngSubmit)="pincode()">
              Unesite Vaš pin da biste platili {{tip}} članarinu.
              <input type="number" required name="pincn" [(ngModel)]="pinn">
              <button type="submit" class="button is-small is-warning">Unesi</button>
          </form>
      </div>
      <div *ngIf="tacanPin">
          Uspesno ste platili !
      </div>
  `,
  styles: [
    
  ]
})
export class CenovnikComponent implements OnInit {

  constructor() { }

  prom1: string;
  prom2: any;
  prom3: any;
  kupi:string;
  pinn:number;
  tacanPin:boolean=false;
  tip:string
  
  ngOnInit(): void {
  }


  onSave(tip:string){
    this.kupi="."
    this.tip=tip
  }

  pincode(){
    if(this.pinn===JSON.parse(localStorage.getItem('pin'))){
        this.tacanPin=true
      }else this.tacanPin=false
  }
}
