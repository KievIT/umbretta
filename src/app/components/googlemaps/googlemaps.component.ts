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

   constructor(
      private gmapsService: GmapsService
      , protected _mapsWrapper: GoogleMapsAPIWrapper
      , protected _zone: NgZone)
     {
       this.gmapsService.getCitiesJSON()
              .subscribe(data => {
                this.gcity = data.umb_gmap_cities;
                this.onClick(0, this.gcity[0]); //set up defaul city
              });
     }

   onClick(i: number,city: gCityType){
     // console.log('City cliked:'+city.city_name);
     // console.log(city);
     this.lat = Number(city.initial_lat);
     this.lng = Number(city.initial_lng);
     this.zoom =  Number(city.initial_zoom_level);
     this.gmapsService.getCityMarkers(city.city_name)
         .map((data) => {
           data.umb_gmap_markers.map(
               e => {
                 e.latitude =  Number(e.latitude);
                 e.longitude =  Number(e.longitude);
                 e.draggable = false;
               }
           );
           return data.umb_gmap_markers;
         })
         .subscribe(data =>
          {
             this.CityMarkers = data;
             // console.log(this.CityMarkers);
          });
   }

   clickedMarker(label: string, index: number) {
       // console.log(`clicked the marker: ${label || index}`)
   }

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

// export interface CityMarkerType {
//   marker_id: number;
// 	latitude: number;
// 	longitude: number;
//   clicable: boolean;
//   title: string;
// 	label?: string;
//   info?:string;
// 	draggable: boolean;
//   city: string;
//   status_cd: string;
//   create_date:string;
// }
interface gCityType {
  city_id: number;
  city_name: string;
  initial_zoom_level: string;
  initial_lat: number;
  initial_lng: number;
  visible: string;
  city_short_name: string;
}
