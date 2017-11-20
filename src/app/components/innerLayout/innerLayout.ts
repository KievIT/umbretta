import { Component, OnInit } from '@angular/core';
import { ContentService} from '../../services/content.service';

@Component({
  selector: 'innerLayout',
  providers: [ContentService], //each API data providen need to be included here
  styleUrls: ['./innerLayout.css'],
  templateUrl: './innerLayout.html'
})

export class innerLayoutContent implements OnInit
{
  private content: ContentType ;
  private contentArray: ContentType[];
  constructor(private contentService: ContentService)  {  }
  ngOnInit(){
    this.contentService.getPageText('2,3,4')
      .subscribe(contentArray => this.content = contentArray);
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
