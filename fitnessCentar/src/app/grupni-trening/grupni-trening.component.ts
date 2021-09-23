import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Korisnik } from '../model/Korisnik';
import { Trening } from '../model/Trening';
import { Trng } from '../model/Trng';
import { ListService } from '../services/list.service';
import { RegLoginService } from '../services/reg-login.service';

@Component({
  selector: 'app-grupni-trening',
  template: `
  <app-header></app-header>
  <section class="hero is-primary is-bold">
      <div class="hero-body">
          <div class="container">
              <h1 class="title is-1 has-text-centered">GRUPNI TRENING</h1>
          </div>
      </div>
  </section>
    
      <div class="columns is-centered  has-background-success  ">
          
              <div style="width:720px;height:500px;overflow:auto" class="has-background-success">
              <span *ngFor="let t of treninzi  | async; let i=index">           
              <span *ngIf="i<3">
              <br><span class="tag is-medium is-primary is-light">{{t.dan}} |{{t.sat}}h  | {{t.tip}}  | Broj slobodnih mesta: {{t.brMesta}} | 
               <button style="background-color:lightBlue" [disabled]="!klik1 ? 'disabled': null"  (click)="rezervisiTrening(t.dan,t.sat,i,'dodaj') ">Rezervisi</button>
               <button (click)="rezervisiTrening(t.dan,t.sat,i,'ukloni')">Otkazi</button></span><br>
              </span>
          
              <span *ngIf="i>2 && i<6">
              <br><span class="tag is-medium is-primary is-light">{{t.dan}} | {{t.sat}}h | {{t.tip}} | Broj slobodnih mesta: {{t.brMesta}} | <button style="background-color:lightBlue" [disabled]="!klik2 ? 'disabled': null"  (click)="rezervisiTrening(t.dan,t.sat,i,'dodaj') ">Rezervisi</button><button (click)="rezervisiTrening(t.dan,t.sat,i,'ukloni')">Otkazi</button></span><br>
              </span>
              
              <span *ngIf="i>5 && i<9">
              <br><span class="tag is-medium is-primary is-light">{{t.dan}} | {{t.sat}}h | {{t.tip}} | Broj slobodnih mesta: {{t.brMesta}} | <button  style="background-color:lightBlue" [disabled]="!klik3 ? 'disabled': null"  (click)="rezervisiTrening(t.dan,t.sat,i,'dodaj') ">Rezervisi</button><button (click)="rezervisiTrening(t.dan,t.sat,i,'ukloni')">Otkazi</button></span><br>
              </span>
             
              <span *ngIf="i>8 && i<12">
              <br><span class="tag is-medium is-primary is-light">{{t.dan}} | {{t.sat}}h  | {{t.tip}} | Broj slobodnih mesta: {{t.brMesta}}  | <button style="background-color:lightBlue" [disabled]="!klik4 ? 'disabled': null"  (click)="rezervisiTrening(t.dan,t.sat,i,'dodaj') ">Rezervisi</button><button (click)="rezervisiTrening(t.dan,t.sat,i,'ukloni')">Otkazi</button></span><br>
              </span>
             
              <span *ngIf="i>11 && i<15">
              <br><span class="tag is-medium is-primary is-light">{{t.dan}} | {{t.sat}}h  | {{t.tip}} | Broj slobodnih mesta: {{t.brMesta}} | <button  style="background-color:lightBlue" [disabled]="!klik5 ? 'disabled': null"  (click)="rezervisiTrening(t.dan,t.sat,i,'dodaj') ">Rezervisi</button><button (click)="rezervisiTrening(t.dan,t.sat,i,'ukloni')">Otkazi</button></span><br>
              </span>
             
              </span>
              </div>
            
              </div>


  `,
  styles: [
  ]
})
export class GrupniTreningComponent implements OnInit {

  constructor(private listService: ListService,private regService:RegLoginService) { }
  
  dan:string=''
  sat:string=''
  treninzi:Observable<Trening[]>  
  korisnici:Observable<Korisnik[]>
  trng:any
  klik1:boolean=true; klik2:boolean=true; klik3:boolean=true;
  klik4:boolean=true; klik5:boolean=true; 

  ngOnInit(): void {
    this.treninzi=this.listService.getTreninzi()    
    
      console.log(localStorage.getItem("trenutniUser"))
    }

    rezervisiTrening(dan, sat,id,addDel) {
        if(id==0 || id==1 || id==2 && addDel==="dodaj" ){
            this.klik1=false
        }
        if(id==3 || id==4 || id==5){
            this.klik2=false
        }
        if(id==6 || id==7 || id==8 ){
            this.klik5=false
        }
        if(id==9 || id==10 || id==11){
            this.klik4=false
        }
        if(id==12 || id==13 || id==14){
            this.klik5=false
        }

        const user = localStorage.getItem("trenutniUser");
        this.listService.rezervisiTrening(user, dan, sat,addDel).subscribe((res) => {
            alert(res.msg + dan + " u " + sat + " casova. Refrešujte stranicu zbog ažuriranja.")
            // console.log("Response koji smo dobili: ", res)
            // window.location.reload();
          }

        )
    }
    // korisniciMetod(){
    //     this.korisnici=this.listService.getKorisnici(this.dan, this.sat)
    // }
    
  }

