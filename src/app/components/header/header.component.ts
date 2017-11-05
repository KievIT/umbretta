import { Component } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html', // Auto required by webpack
})
export class HeaderComponent {
    private LOGO = require("assets/logo.png");
    // private firstWALL = require("./wall1.png");

    constructor() {};
}
