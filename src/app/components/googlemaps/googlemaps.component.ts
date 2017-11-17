import { Component    } from '@angular/core';
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

  gcity: gCityType;
  activeCity:gCityType ;
  defaultCityID: 0;
  CityMarkers: CityMarkerType;

  // markers: marker[] = [
  //       {
  //         lat: 40.705869,
  //         lng: 40.705869,
  //         label: 'A',
  //         info: 'Manhattan, Address Line 2',
  //         initial_zoom_level: 15,
  //         draggable: false
  //       },
  //       {
  //         lat: 51.373858,
  //         lng: 7.215982,
  //         label: 'B',
  //         initial_zoom_level: 15,
  //         info: 'New York, Address Line 2',
  //         draggable: false
  //       },
  //       {
  //         lat: 51.723858,
  //         lng: 7.895982,
  //         label: 'C',
  //         initial_zoom_level: 15,
  //         info: 'New Jersey, Address Line 2',
  //         draggable: false
  //       }
  //     ];

 // private arr: Array[];
   constructor(private gmapsService: GmapsService)
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
                  // this.lat = this.gcity[0].initial_lat;
                  // this.lng = this.gcity[0].initial_lng;
                  // this.zoom = this.gcity[0].initial_zoom_level;
              });
              //this.activeCity;

          //  this.markers;
            this.gcity;
       //   console.log(this.gcity);
     }

  // functionFilter(arg: gCityType[], parameter: string) {
  //   private num: number;
  //    for(num=0;num<=arg.length();num++){
  //       console.log(arg[num]);
  //    }
  // }
  // getMarkers(private city: string){
  //
  // }


   onClick(city: string){
     console.log(city);
     this.gmapsService.getCityMarkers(city)
      .subscribe(data => {this.CityMarkers = data; console.log(this.CityMarkers);});

       // this.lat = lat;
       // this.lng = lng;
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
  initial_zoom_level: string;
  info?:string;
	draggable: boolean;
}

interface CityMarkerType {
  marker_id: number;
	lat: number;
	lng: number;
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
