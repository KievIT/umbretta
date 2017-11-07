import { Component, OnInit } from '@angular/core';
import { ContentService} from '../../services/content.service';

@Component({
  selector: 'secondLayout',
  templateUrl: './second-layout.component.html',
  styleUrls: ['./second-layout.component.css'],
  providers: [ContentService]
})
export class secondLayout {
  private content: ContentType;
  private AdvertisementSolution: ContentType;
  private KioskFeaturesBlock1: ContentType;
  private KioskFeaturesBlock2: ContentType;
  private contentArray: ContentType[];

  constructor(private contentService: ContentService) {
    this.contentService.getPageText('5')
      .subscribe(Content => this.content = Content);

    this.contentService.getPageText('6,7,8')
          .subscribe(ContentArray => this.KioskFeaturesBlock1 = ContentArray);

    this.contentService.getPageText('9,10,11')
          .subscribe(ContentArray => this.KioskFeaturesBlock2 = ContentArray);

    this.contentService.getPageText('12,13,14')
        .subscribe(ContentArray => this.AdvertisementSolution = ContentArray);

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
