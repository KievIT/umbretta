import { Component } from '@angular/core';

@Component({
  selector: 'navItem',
  templateUrl: './nav-item.template.html'
})

export class navItemContent {
  ContentArray: ContentArrayType[];

  constructor() {
    this.ContentArray = [{link:"Umbretta", href:"#"}
    ,{link:"Features", href:"#Features"}
    ,{link:"Ads", href:"#Ads"}
    ,{link:"Map", href:"#Map"}
    ,{link:"Request", href:"#Request"}
    ,{link:"Charity", href:"#Charity"}
    ,{link:"Contact us", href:"#Contact"} ];
    }
}

interface ContentArrayType {
  link: string;
  href: string;
}
