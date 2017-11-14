import { Component } from '@angular/core';
import { GmapsService } from '../../services/gmaps.service';
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
export class GmapsComponent {
  // google maps zoom level
  zoom: number = 15;
  // initial center position for the map
  lat: number = 40.705869;
  lng: number =  -74.009936;

  private gcity: gCityType[] ;
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
  // gcity =
    // [1, "New York", 15, "40.705869", "-74.009936", "Y"],
    // [2, "Boston", 15, "42.358852", "-71.056855", "Y"],
    // [3, "Chicago", 15, "41.853854", "-87.633130", "Y"],
    // [4, "Los Angeles", 15, "34.049750", "-118.337620", "Y"],
    // [5, "San Francisco", 15, "37.771725", "-122.419750", "Y"]
  //   ;
 constructor(private gmapsService: GmapsService)
 {
   //attributes which will be used in work
   this.lat;
   this.lng;
   this.zoom;
   this.markers;

     this.gmapsService.getCities()
      //  .subscribe(gCity => this.gcity = gCity);
      // .subscribe(data => console.log(data));
      .subscribe(gCity => console.log(gCity.umb_gmap_cities.records[0]));
   //   console.log(this.gcity);
 }

 onClick(lat: number, lng: number){
     this.lat = lat;
     this.lng = lng;
 }
 clickedMarker(label: string, index: number) {
     console.log(`clicked the marker: ${label || index}`)
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

interface gCityType {
  city_id: number,
  city_name: string,
  initial_zoom_level: string;
  initial_lat: string;
  initial_lng: string;
  visible: string;
}
