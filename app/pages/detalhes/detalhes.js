import {Page, NavController} from 'ionic/ionic';
import {MapaPage} from "../mapa/mapa";


@Page({
  templateUrl: 'build/pages/detalhes/detalhes.html'
})

export class DetalhesPage {
  constructor(nav: NavController) {
    this.nav = nav;
    this.initializeItems();

  }


  initializeItems() {
    this.items = [
       {foto: "http://lorempixel.com/100/100/" , nome: "Daneil Sanchez Colin", email: "guilherme@gmail.com"},
       {foto: "http://lorempixel.com/100/100/" , nome: "Juan Hernandes ", email: "diego@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Los Placeres", email: "paulo@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Marco Romero", email: "leanardo@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Lupe Monroy", email: "leandro@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Adiran Martinez", email: "leocampos@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Yael Sanchez", email: "leocampos@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Juan Aranguiz", email: "christian@gmail.com" },
    ];
  }



  goTo(){
    this.nav.push(MapaPage);
  }

  goBack() {
    this.nav.pop();
  }
}
