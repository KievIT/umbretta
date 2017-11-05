import { Component } from '@angular/core';

@Component({
  selector: 'navItem',
  templateUrl: './nav-item.template.html'
})

export class navItemContent {
  ContentArray: ContentArrayType[];

  constructor() {
    this.ContentArray = [{link:"Ubretta", href:"#"}
    ,{link:"Features", href:"#"}
    ,{link:"Ads", href:"#"}
    ,{link:"Map", href:"#"}
    ,{link:"Request", href:"#"}
    ,{link:"Charity", href:"#"}
    ,{link:"Contact us", href:"#"} ];
    }
}

interface ContentArrayType {
  link: string;
  href: string;
}
