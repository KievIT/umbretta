import { Component, Injectable, NgZone   }         from '@angular/core';
import { AgmMarker }            from '@agm/core/directives/marker';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { Marker }               from '@agm/core/services/google-maps-types';
import { GmapsService }         from '../../services/gmaps.service';
import 'rxjs/add/operator/map'
@Component({
  selector: 'ngx-gmaps',
  providers: [GmapsService],
  styles: [`
    agm-map {
      height: 550px;
    }
  `],
  templateUrl: './googlemaps.component.html',
})
// <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom" [mapTypeId]="'hybrid'"></agm-map>
//  Options are: 'roadmap' | 'hybrid' | 'satellite' | 'terrain'
@Injectable()
export class GmapsComponent {

// protected _markers: Map<AgmMarker, Promise<Marker>> =   new Map<AgmMarker, Promise<Marker>>();
   zoom: number = 15; // google maps zoom level
  // initial center position for the map
   lat: number = 40.705869;
   lng: number =  -74.009936;
   activeCity: gCityType;
   gcity: gCityType;
   defaultCityID: 0;
   // CityMarkers: CityMarkerType;
    CityMarkers: AgmMarker;
 //  mymarker: AgmMarker;
  // console.log(mymarker);
   // let id = mymarker.longtitude.push('40.705869');
   // let id = mymarker.longtitude.push('-74.009936');

   // markers: AgmMarker = [{
   //        lat: 40.705869,
   //        lng: 40.705869,
   //        label: 'A',
   //        info: 'Manhattan, Address Line 2',
   //        initial_zoom_level: 15,
   //        draggable: false
   //      } ];

 // private arr: Array[];
   constructor(private gmapsService: GmapsService, protected _mapsWrapper: GoogleMapsAPIWrapper, protected _zone: NgZone)
     {
       //attributes which will be used in work
     //  this.lat;
     //  this.lng;
    //   this.zoom;
    //   this.activeCity;
    //   this._markers;
       this.gmapsService.getCitiesJSON()
              .subscribe(data => this.gcity = data.umb_gmap_cities);
     }

  // functionFilter(arg: string) {
  //   private num: number;
  //    for(num=0;num<=arg.length();num++){
  //       console.log(arg[num]);
  //    }
  // }

  // myMarker(){
  //   const markerPromise = this._mapsWrapper.createMarker(
  //     {
  //       position: {lat: 40.639294, lng: -73.907510},
  //       label: 'A',
  //       visible: true,
  //       clickable: true
  //     });
  //     this._markers.set(markerPromise, markerPromise);
  // }

/*  addMarker(marker: AgmMarker) {
    const markerPromise = this._mapsWrapper.createMarker({
      position: {lat:  Number(marker.latitude), lng:  Number(marker.longitude)},
      label: marker.label,
      draggable: marker.draggable,
      icon: marker.iconUrl,
      opacity: marker.opacity,
      visible: marker.visible,
      zIndex: marker.zIndex,
      title: marker.title,
      clickable: marker.clickable
    });
    //console.log(markerPromise);
    this._markers.set(marker, markerPromise);
  }*/

   onClick(i: number,city: gCityType){
     console.log('City cliked:'+city.city_name);
     console.log(city);
     this.lat = Number(city.initial_lat);
     this.lng = Number(city.initial_lng);
     this.gmapsService.getCityMarkers(city.city_name)
         .map((data) => {
           data.umb_gmap_markers.map(
               e => {
                 e.latitude =  Number(e.latitude);
                 e.longitude =  Number(e.longitude);
               }
           );
           return data.umb_gmap_markers;
         })
         .subscribe(data =>
          {
             this.CityMarkers = data;
          //   this.lat = data.umb_gmap_markers['lat'];
         //    this.lng = data.umb_gmap_markers['lng'];
             console.log(this.CityMarkers);
             // this._markers.set(              {
             //                   latitude: "40.639294"
             //                 , longitude: "-73.907510"
             //                 , label: null
             //               });
          //  this.addMarker(this.CityMarkers[0]);
          });
   }

   clickedMarker(label: string, index: number) {
       console.log(`clicked the marker: ${label || index}`)
   }

}
// just an interface for type safety.
interface marker {
	latitude: number;
	longitude: number;
	label?: string;
  initial_zoom_level: string;
  info?:string;
	draggable: boolean;
}

interface CityMarkerType {
  marker_id: number;
	latitude: number;
	longitude: number;
  clicable: boolean;
  title: string;
	label?: string;
  info?:string;
	draggable: boolean;
  city: string;
  status_cd: string;
  create_date:string;
}
interface gCityType {
  city_id: number;
  city_name: string;
  initial_zoom_level: string;
  initial_lat: number;
  initial_lng: number;
  visible: string;
  city_short_name: string;
}
