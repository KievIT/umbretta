import { Component, OnInit } from '@angular/core';
import {postformService} from '../../services/postform.service';
import {User} from './user';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
   providers: [postformService]
})
export class FormsComponent  {
  show: boolean;
  buttonEnabled=true;
  user: User = new User();

  constructor(  private postformService: postformService) {
    this.buttonEnabled;
    this.show = false;
  }

  // onInit(){}
  submit(user: User) {
     console.log(this.user);
     this.postformService.postDataUser(this.user)
     .subscribe(data => this.show = data.json());
     // {console.log(data.json());}
    // console.log(user);
    // this.buttonEnabled=false;  //disabling sending severall times in a session
  }

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
