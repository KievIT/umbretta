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
    return this.http.get(environment.crud_php_api+'/umb_gmap_cities?filter=visible,eq,Y')
         .map(res => res.json());
  }
  getCitiesJSON(){
    return this.http.get(environment.crud_php_api+'/umb_gmap_cities?filter=visible,eq,Y')
         .map(res => res.json());
  }
  // getCitiesJSON(){
  //   // console.log('!!!');
  //
  //     return this.http.get(environment.crud_php_api+'/umb_gmap_cities?filter=visible,eq,Y')
  //       .map(res => res.json());
  //      //   //    console.log(res.json());
  //      //   //   // console.log(res.json();
  //      //   // })
  //      //   .subscribe(data => {
  //      //   return this.data;
  //      // })
  // }

  // getCitiesJSON() : Observable {
  //         return this.http.get(environment.crud_php_api+'/umb_gmap_cities?filter=visible,eq,Y')
  //         .map(data=>{
  //             return data;
  //             // return userList;
  //             // return usersList.map(function(user:any) {
  //             //     return {name: user.userName, age: user.userAge};
  //             //   });
  //         });
  //     }

  // getCityMarkers(arg: string){
  //   return this.http.get('http://localhost/tmp/rest-api/api.php/umb_content/'+arg)
  //      .map(res => res.json());
  // }

}

export class City{
  city_id: number;
  city_name: string;
  initial_zoom_level: string;
  initial_lat: string;
  initial_lng: string;
  visible: string;
}
