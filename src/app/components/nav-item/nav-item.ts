import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navItem',
  templateUrl: './nav-item.template.html'
})

export class navItemContent implements OnInit {
  ContentArray: ContentArrayType[];

  constructor() {  }

  ngOnInit() {
      this.ContentArray = [
       {link:"Features", href:"#Features"}
      ,{link:"Ads", href:"#Ads"}
      ,{link:"Opportunities", href:"#Opportunities"}
      ,{link:"Map", href:"#Map"}
      ,{link:"Request", href:"#Request"}
      // ,
      ,{link:"Contact us", href:"#Contact"} ];
    }


}

interface ContentArrayType {
  link: string;
  href: string;
}
