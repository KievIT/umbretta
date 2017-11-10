import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styles: [`
    agm-map {
      height: 550px;
    }
  `],
  templateUrl: './googlemaps.component.html',
})
// <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom" [mapTypeId]="'hybrid'"></agm-map>
// worked for me... Options are: 'roadmap' | 'hybrid' | 'satellite' | 'terrain'
export class GmapsComponent {

  clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
  }
  // google maps zoom level
  zoom: number = 15;
  // initial center position for the map
  lat: number = 40.705869;
  lng: number =  -74.009936;

  onClick(lat: number, lng: number){
      this.lat = lat;
      this.lng = lng;
  }

  markers: marker[] = [
        {
          lat: 51.673858,
          lng: 7.815982,
          label: 'A',
          info: 'Manhattan, Address Line 2',
          draggable: false
        },
        {
          lat: 51.373858,
          lng: 7.215982,
          label: 'B',
          info: 'New York, Address Line 2',
          draggable: false
        },
        {
          lat: 51.723858,
          lng: 7.895982,
          label: 'C',
          info: 'New Jersey, Address Line 2',
          draggable: true
        }
      ];
 constructor(){
   //attributes which will be used in work
   this.lat;
   this.lng;
   this.zoom;
   this.markers;
 }



}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
  info?:string;
	draggable: boolean;
}
