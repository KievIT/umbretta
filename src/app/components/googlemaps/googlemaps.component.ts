import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styles: [`
    agm-map {
      height: 550px;
    }
  `],
  template: `
    <agm-map [latitude]="lat" [longitude]="lng">
      <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
      <agm-marker *ngFor="let m of markers; let i = index"
          (markerClick)="clickedMarker(m.label, i)"
          [latitude]="m.lat"
          [longitude]="m.lng"
          [label]="m.label"
          [markerDraggable]="m.draggable">
          <agm-info-window [disableAutoPan]="true">
           {{m.info}}
        </agm-info-window>
      </agm-marker>

    </agm-map>
  `,
})

export class GmapsComponent {

  clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
  }
  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

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
