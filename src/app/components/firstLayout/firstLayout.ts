import { Component } from '@angular/core';
import { ContentService} from '../../services/content.service';
@Component({
    selector: 'firstLayout',
    providers: [ContentService], //each API data providen need to be included here
    templateUrl: './firstLayout.html', // Auto required by webpack
})
export class firstLayout {
  private imgMachine = require("assets/machine.png");
  private content: ContentType ;
  private contentArray: ContentType[];
  constructor(
     private contentService: ContentService
  ){
    // this.contentService.getAllPageText()
    // .subscribe(contentArray => this.content = contentArray.firstPage);
     this.contentService.getPageText('firstPage')
       .subscribe(Content => this.content = Content);
     this.imgMachine;
     // console.log(this.content['name']);
  };
}

interface ContentType {
  name: string;
  text: string;
  picture: string;
  imgPosition: string;
}
