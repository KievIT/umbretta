import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// let global = new Globals;
@Injectable()

export class GmapsService{
  constructor(private http: Http) {
    console.log('gMAPs Service Called.');
  }

  getCities(){
    return this.http.get('http://localhost/tmp/rest-api/api.php/umb_gmap_cities?filter=visible,eq,Y')
         .map(res => res.json());
  }

  // getCityMarkers(arg: string){
  //   return this.http.get('http://localhost/tmp/rest-api/api.php/umb_content/'+arg)
  //      .map(res => res.json());
  // }

}
