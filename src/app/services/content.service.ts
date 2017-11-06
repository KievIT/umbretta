import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// let global = new Globals;
@Injectable()

export class ContentService{
  private ContentText = {
      firstPage: { name: 'Umbretta Kiosk', text: 'Umbretta is a something you might need to implement', picture: 'assets/machine.png',imgPosition:'' },
      innerPage1: { name: "Don't let the rain ruin your day", text: "More than 200...", picture: 'assets/img1.jpg',imgPosition:'left' },
      innerPage2: { name: "Make a rainy day colorful", text: "Choise...", picture: 'assets/img2.jpg',imgPosition:'right' },
      innerPage3: { name: "The rain won't empty...", text: "Umbrella......", picture: 'assets/img3.jpg',imgPosition:'left' },
      KioskFeatures : { name: "Kiosk features", text: "Features......", picture: "none",imgPosition:"none" },
    };
  private ContentArray: any[];

  constructor() {
    console.log('Content Service Initialized.');
    // this.userArray = Object.values(this.users);
  }
  getAllPageText(): Observable<any> {
    return Observable.of(this.ContentText);
  }
  getPageText(arg: string): Observable<any> {
    return Observable.of(this.ContentText[arg]);
  }

  getPageArray(): Observable<any[]> {
    return Observable.of(this.ContentArray);
  }
}
