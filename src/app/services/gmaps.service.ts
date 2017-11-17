import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import { environment }  from '../../environments/environment';
import                       'rxjs/add/observable/of';
// let global = new Globals;
@Injectable()

export class GmapsService{
  constructor(private http: Http) {
    console.log('gMAPs Service Called.');

  }

  getCities(){
    // *************** taken from CRUD_PHP_API
    // <script src="../lib/php_crud_api_transform.js"></script>
    // http.get(url).map(res => php_crud_api_transform(res.json())).subscribe(res => this.posts = res.posts);
    // ****************
    return this.http.get(environment.crud_php_api+'/umb_gmap_cities?filter=visible,eq,Y')
         .map(res => res.json());
  }
  getCitiesJSON(){
    return this.http.get(environment.crud_php_api+'/umb_gmap_cities?filter=visible,eq,Y&transform=1')
         .map(res => res.json());
  }


  getCityMarkers(city: string){
    //...umb_gmap_markers/?filter[]=status_cd,eq,A&filter[]=city,eq,New York&transform=1&satisfy=all
    return this.http.get(environment.crud_php_api+'/umb_gmap_markers/?filter[]=status_cd,eq,A&filter[]=city,eq,'+city+'&satisfy=all&transform=1')
       .map(res => res.json());
  }

}

export class City{
  city_id: number;
  city_name: string;
  initial_zoom_level: string;
  initial_lat: string;
  initial_lng: string;
  visible: string;
}
