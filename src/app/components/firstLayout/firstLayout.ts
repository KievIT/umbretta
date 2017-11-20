import { Component, OnInit } from '@angular/core';
import { ContentService} from '../../services/content.service';
@Component({
    selector: 'firstLayout',
    providers: [ContentService], //each API data provider need to be included here
    templateUrl: './firstLayout.html', // Auto required by webpack
})
export class firstLayout implements OnInit {
  private imgMachine = require("assets/machine1.png");
  private content: ContentType ;
  private contentArray: ContentType[];
  constructor(private contentService: ContentService){ }
  ngOnInit(){
    this.contentService.getPageText('1')
      .subscribe(Content => this.content = Content);
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
