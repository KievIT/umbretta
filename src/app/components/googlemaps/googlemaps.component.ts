import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styles: [`
    agm-map {
      height: 550px;
    }
  `],
  template: `
  <div class="row">
    <div class="col-3"></div>
      <div class="col-6 LayoutText" style="height: 100px; margin: 20px 0 -160px 0; z-index: 100; background-color: rgba(255, 255, 255, 0,5);">
        <div class="row">
          <div class="col">
            <h2 class="text-center">Umbretta Kiosks on the Map</h2>
          </div>
        </div>
        <div class="row" style="height: 58%">
          <div class="col btn-cities text-center align-self-end" (click)="onClick(40.705869, -74.009936)"> <h6>New York</h6> </div>
          <div class="col btn-cities text-center align-self-end" (click)="onClick(42.358852, -71.056855)"> <h6>Boston</h6> </div>
          <div class="col btn-cities text-center align-self-end" (click)="onClick(41.853854, -87.633130)"> <h6>Chicago</h6> </div>
          <div class="col btn-cities text-center align-self-end" (click)="onClick(34.049750, -118.33762)"> <h6>Los Angeles</h6> </div>
          <div class="col btn-cities text-center align-self-end" (click)="onClick(37.771725, -122.419750)"> <h6>San Francisco</h6> </div>
        </div>
      </div>
    <div class="col-3"></div>
  </div>
  <div class="row">
    <div class="col">
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
      </div>
    </div>
  `,
})

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
