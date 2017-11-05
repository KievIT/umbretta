import { Component } from '@angular/core';

@Component({
    selector: 'firstLayout',
    templateUrl: './firstLayout.html', // Auto required by webpack
})
export class firstLayout {
  private imgMachine = require("assets/machine.png");
      constructor() {};
}
