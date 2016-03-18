import {Page,NavController} from 'ionic/ionic';
import {DetalhesPage} from "../detalhes/detalhes";



@Page({
  templateUrl: 'build/pages/page1/page1.html'
})



export class Page1 {
  constructor(nav: NavController) {
    this.nav = nav;
    this.searchQuery = '';
    this.initializeItems();
  }

  goTo(){
    this.nav.push(DetalhesPage);
  }

  // initializeItems() {
  //   this.items = [
  //     'Amsterdam',
  //     'Bogota',
  //   ];
  // }



  initializeItems() {
    this.items = [
      {foto: "http://lorempixel.com/100/100/" , nome: "Daneil", idade: "16-03-2015",fecha: "16", estadop:"pagado"},
      {foto: "http://lorempixel.com/100/100/" , nome: "Juan Hernandes", idade: "16-03-2015" ,fecha: "20", estadop:"no pagado"},
      {foto: "http://lorempixel.com/100/100/" , nome: "Los Placeres", idade: "16-03-2015",fecha: "20" , estadop:"no pagado"},
      {foto: "http://lorempixel.com/100/100/" , nome: "Marco Romero", idade: "16-03-2015" ,fecha: "20", estadop:"pagado"},
      {foto: "http://lorempixel.com/100/100/" , nome: "Lupe Monroy", idade: "16-03-2015",fecha: "20", estadop:"no pagado" },
      {foto: "http://lorempixel.com/100/100/" , nome: "Adiran Martinez", idade: "16-03-2015",fecha: "20", estadop:"no pagado" },
      {foto: "http://lorempixel.com/100/100/" , nome: "Yael Sanchez", idade: "16-03-2015" ,fecha: "20", estadop:"pagado"},
    ];
  }


  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.items = this.items.nome.filter((v) => {
      if (v.toLowerCase().indexOf(q.toLowerCase()) > 1) {
        return true;
      }
      return false;
    })
  }


}
