import { Component, Injectable, NgZone   }         from '@angular/core';
import { AgmMarker }            from '@agm/core/directives/marker';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { Marker }               from '@agm/core/services/google-maps-types';
import { GmapsService }         from '../../services/gmaps.service';
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

 protected _markers: Map<AgmMarker, Promise<Marker>> =   new Map<AgmMarker, Promise<Marker>>();
   zoom: number = 15; // google maps zoom level
  // initial center position for the map
   lat: number = 40.705869;
   lng: number =  -74.009936;
   activeCity: gCityType;
   gcity: gCityType;
   defaultCityID: 0;
   CityMarkers: CityMarkerType;
   mymarker: AgmMarker;
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
       this.lat;
       this.lng;
       this.zoom;
         this.gmapsService.getCitiesJSON()
            //  .subscribe(data => this.gcity = data);
             // .subscribe(data => console.log(data));
               .subscribe(data => {
                  this.gcity = data.umb_gmap_cities;
                  this.activeCity = this.gcity[0];
                // console.log(data.umb_gmap_cities.records))
                  console.log(this.gcity[0]);
          });
              //this.activeCity;

          //  this.markers;
            this.gcity;
       //   console.log(this.gcity);
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

  addMarker(marker: AgmMarker) {
    const markerPromise = this._mapsWrapper.createMarker({
      position: {lat: marker.latitude, lng: marker.longitude},
      label: marker.label,
      draggable: marker.draggable,
      icon: marker.iconUrl,
      opacity: marker.opacity,
      visible: marker.visible,
      zIndex: marker.zIndex,
      title: marker.title,
      clickable: marker.clickable
    });
    this._markers.set(marker, markerPromise);
  }

   onClick(city: string, i: number){
     console.log(city);
     this.gmapsService.getCityMarkers(city)
      .subscribe(data =>
          {
             this.CityMarkers = data.umb_gmap_markers;
             console.log(this.CityMarkers);
             // this._markers.set(              {
             //                   latitude: "40.639294"
             //                 , longitude: "-73.907510"
             //                 , label: null
             //               });
              // this.addMarker(
                  // {
                  //     latitude: "40.639294"
                  //   , longitude: "-73.907510"
                  //   , label: null
                  // }
              // );
          });

        // this.lat = this.gcity[i].initial_lat;
        // this.lng = this.gcity[i].initial_lng;
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
  initial_lat: string;
  initial_lng: string;
  visible: string;
  city_short_name: string;
}
