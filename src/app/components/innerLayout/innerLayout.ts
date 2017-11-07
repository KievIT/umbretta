import { Component } from '@angular/core';
import { ContentService} from '../../services/content.service';

@Component({
  selector: 'innerLayout',
  providers: [ContentService], //each API data providen need to be included here
  templateUrl: './innerLayout.html'
})

export class innerLayoutContent
{
  private content: ContentType ;
  private contentArray: ContentType[];
  constructor(private contentService: ContentService)
  {
    this.contentService.getPageText('2,3,4')
      .subscribe(contentArray => this.content = contentArray);
  // this.contentArray = [
  //    {name:"Don't let the rain ruin your day", text:"More than 200...", picture:"assets/img1.jpg", imgPosition:"left" }
  //   ,{name:"Make a rainy day colorful", text:"Choise...", picture:"assets/img2.jpg", imgPosition:"right" }
  //   ,{name:"The rain want empty...", text:"Umbrella...", picture:"assets/img3.jpg",imgPosition:"left" }
  //   ,{ name:"Kiosk features", text:"Features...", picture:"none", imgPosition:"none"} ];
  //   }
    //this sthould be called in a loop
    // or by appending contentArray by severall contentServiceCalls
    //or I'll rewrite Service
    // this.contentService.getPageText('innerPage1')
    //   .subscribe(Content => this.content = Content);
  }
}

interface ContentType {
  content_id: number,
  group_name: string,
  name: string;
  description: string;
  imgPath: string;
  imgPosition: string;
}
