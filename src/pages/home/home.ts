import { Component } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { Contato } from '../../models/Contato';
import { HttpClient } from '@angular/common/http';
import { Tempo } from '../../models/Tempo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // public contatos: Contato[];
  public tempo: Tempo[]; 
  
  constructor(public navCtrl: NavController, private _http: HttpClient) {
    
    this._http.get<Tempo[]>('http://tempo-oeiras.herokuapp.com/api/')
        .subscribe(
          (tempo) => {
            console.log(tempo);
            this.tempo = tempo
          }
        );
        console.log(this.tempo);
  }
}
