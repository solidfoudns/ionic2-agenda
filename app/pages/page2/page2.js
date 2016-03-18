import {Page} from 'ionic/ionic';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
 
@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
  constructor(http: Http) {
 
    this.http = http;
    this.posts = null;
 
    this.http.get('http://localhost:8000/api/orden/').map(res => res.json()).subscribe(data => {
        this.posts = data;
    });
 	console.log(this.posts);
  }
}