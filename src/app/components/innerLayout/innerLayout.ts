import { Component } from '@angular/core';

@Component({
  selector: 'innerLayout',
  templateUrl: './innerLayout.html'
})

export class innerLayoutContent {
  innerLayoutArray: innerLayoutArrayType[];

  constructor() {
    this.innerLayoutArray = [{imgPosition:"left", imgLink:"img1", title:"Don't let the rain ruin your day", text:"More than 200..."}
    ,{imgPosition:"right", imgLink:"img2", title:"Make a rainy day colorful", text:"Choise..."}
    ,{imgPosition:"left", imgLink:"img3", title:"The rain want empty...", text:"Umbrella..."}
    ,{imgPosition:"none", imgLink:"none", title:"Kiosk features", text:"Features..."} ];
    }
}

interface innerLayoutArrayType {
  imgPosition: string;
  imgLink: string;
  title: string;
  text: string;
}
