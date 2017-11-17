import { Input, Component, OnInit } from '@angular/core';



@Component({
  selector: 'alert',
  templateUrl: './alert-closeable.html'
})
export class NgbdAlert implements OnInit{

  @Input() type: string;
  @Input() message: string;
  @Input() staticAlertClosed = false;

  ngOnInit(): void {
     setTimeout(() => this.staticAlertClosed = true, 90000);
     // this.type = 'success';
     // this.message = 'ok';
     // this.staticAlertClosed = false;
    // console.log(this.staticAlertClosed);
  }

}

// export interface IAlert {
//   type: string;
//   message: string;
// }
