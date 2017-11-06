import { Component, OnInit } from '@angular/core';
import { ContentService} from './../services/content.service';

@Component({
  selector: 'secondLayout',
  templateUrl: './second-layout.component.html',
  styleUrls: ['./second-layout.component.css'],
  providers: [ContentService]
})
export class secondLayout {
  private content: ContentType;

  constructor(private contentService: ContentService) {
    this.contentService.getPageText('KioskFeatures')
      .subscribe(Content => this.content = Content);

  }

}

interface ContentType {
  name: string;
  text: string;
  picture: string;
  imgPosition: string;
}
