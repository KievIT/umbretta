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

  gcity: gCityType  ; //= [0,'','','','','']
  //gcity["city_name"] = "NY!";
//  gcity = {1,2,3,4,5,6};
  // console.log(gcity);
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
 private obj: any;
 // private arr: Array[];
   constructor(private gmapsService: GmapsService)
     {
       //attributes which will be used in work
       this.lat;
       this.lng;
       this.zoom;
       this.markers;
       this.gcity;

         this.gmapsService.getCitiesJSON()
          //  .subscribe(gCity => this.gcity = gCity);
           // .subscribe(data => console.log(data));
             .subscribe(data => {
              // console.log(data.umb_gmap_cities.records))
              let header_obj = data.umb_gmap_cities.columns;
              let records_obj = data.umb_gmap_cities.records;
              console.log(records_obj);
              for (let i = 0; i < records_obj.length; i++) {
              //  this.gcity = records_obj[i] as gCityType ;
              // this.gcity.push(records_obj[i]);
              //  console.log(this.gcity);



                //   ******************
                //        this.markers.push({'lat':data.geometry.location.lat,'lng':data.geometry.location.lng})
                //   ****************
                //  myObject["someString"] = "yeah!"
                //  *****************


                  // records_obj[i] => records_obj[i].json() ;
                //  console.log(records_obj[i].map(res => res.json()));
                //  this.gCity.push(records_obj[i]);
                      //const data = new WikiData(jsonData[1][i], jsonData[2][i]);
                  // this.wikiData.push(data);
             // }
             // console.log(this.gcity);
              // for (let value in data.umb_gmap_cities.records){
              //   console.log(value);
              // }

              // console.log(header_obj);
              //  for(let value in header_obj[1]){
              //     console.log(value);
                }
            //  console.log(obj[1][1]); //name
              // console.log(Object.keys(obj).map((key)=>{ return obj[key]}));

            });

       //   console.log(this.gcity);
     }

   // generateArray(obj){
   //    return Object.keys(obj).map((key)=>{ return obj[key]});
   // }

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
  city_id: number;
  city_name: string;
  initial_zoom_level: string;
  initial_lat: string;
  initial_lng: string;
  visible: string;
}
