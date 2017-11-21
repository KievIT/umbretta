import { Component, OnInit, Output } from '@angular/core';
import {postformService} from '../../services/postform.service';
import {User} from './user';
import {MessageService} from '../../services/message.service';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [postformService],
  animations: [
    trigger('formState', [
      state('true', style({
         display: 'none'
      })),
      state('false', style({
        display: 'block'
      })),
      transition('false => true', animate('400ms ease-in', keyframes([
        style({opacity: 0.8, height: '500px'}),
        style({opacity: 0.6, height: '400px'}),
        style({opacity: 0.4, height: '300px'}),
        style({opacity: 0.3, height: '200px'}),
        style({opacity: 0.2, height: '100px'}),
        style({opacity: 0.1, height: '50px'}),
        style({opacity: 0, height: '0'}),
        // style({display: 'none'})
      ]))),
      // transition('active => inactive', animate('100ms ease-out'))
      ])
  ]
})
export class FormsComponent implements OnInit  {
  state: string;
  buttonEnabled=true;
  user: User = new User();

  // @Output() message_form: string;
  // @Output() type_form: string;

  constructor( private postformService: postformService, private messageService: MessageService) {  }
  ngOnInit(){
    this.buttonEnabled;
    this.state = 'false';
  }

  submit(user: User) {
     console.log(this.user);
     this.messageService.sendMessage('Email sending...', 'warning');
     this.postformService.postDataUser(this.user)
     .subscribe(data => {
       this.messageService.sendMessage(data.json().message, data.json().type);
       this.state = data.json().show;
     });

     // {console.log(data.json());}
    // console.log(user);
    // this.buttonEnabled=false;  //disabling sending severall times in a session
  }

  sendMessage(message: string, type: string): void {
       // sending message to all who have subscribed via observable subject
       this.messageService.sendMessage(message, type);
   }

   clearMessage(): void {
       // clear messages
       this.messageService.clearMessage();
   }

  // alert(message: string, type: string){
    // type = 'danger';
    // message = 'testing';
  //   this.sendMessage(message, type);
  //   // setTimeout(() => this.clearMessage(), 4000);
  // }

  // onSubmit({ value, valid }: { value: User, valid: boolean }) {
  //   this.postformService.postData(value)
  //               .subscribe(error => console.log(error));
  //   console.log(value, valid);
  //   this.buttonEnabled=false;  //disabling sending severall times in a session
  // }

}

// interface User {
//   name: string;
//   phone: string;
//   email: string;
//   city: string;
//   question: string;
// }
