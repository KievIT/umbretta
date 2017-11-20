import { Component, OnInit } from '@angular/core';
import { ContentService} from '../../services/content.service';

@Component({
  selector: 'opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css'],
  providers: [ContentService]
})

export class OpportunityComponent implements OnInit {
  private content: ContentType;
  private contentArray: ContentType[];
  constructor(private contentService: ContentService) { }
  ngOnInit() {
      this.contentService.getPageText('15')
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
