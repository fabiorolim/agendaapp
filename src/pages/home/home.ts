import { Component } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { Contato } from '../../models/Contato';
import { HttpClient } from '@angular/common/http'
import { Carro } from '../../models/Carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public contatos: Contato[];

  constructor(public navCtrl: NavController, private _http: HttpClient) {
    
    this._http.get<Contato[]>('http://localhost:5000/api')
        .subscribe(
          (contatos) => {
            console.log(contatos);
            this.contatos = contatos
          }
        );
        console.log(this.contatos);
  }
}
