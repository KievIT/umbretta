import { Component, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MessageService} from './services/message.service';
// import { AuthComponent} from 'auth/auth.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
     // styleUrls: ['./app.component.css'],
  //template: '<h1>{{title}}</h1>'
})



export class AppComponent implements OnDestroy {
  message: any;
  subscription: Subscription;
  // @Input() type_form: string;
  // @Input() message_form: string;
  // @Input() staticAlertClosed = false;
  title = 'app';
  // type: string;
  // message: string;

  constructor(private messageService: MessageService) {
       // подписываемся на сообщения
       this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
   }

   ngOnDestroy(): void {
       // нужно отписаться чтобы не выгружать память
       this.subscription.unsubscribe();
   }


    // this.type = this.type_form;
    // this.message = this.message_form;
    // this.staticAlertClosed = false;

}
