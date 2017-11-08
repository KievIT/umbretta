import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {
  buttonEnabled=true;
  user: User = {
    name: '',
    email: '',
    phone: '',
    city: '',
    question: ''
  };

  constructor() {
    this.user;
    this.buttonEnabled;
  }

  onInit(){}

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
    this.buttonEnabled=false;  //disabling sending severall times in a session
  }

}

interface User {
  name: string;
  phone: string;
  email: string;
  city: string;
  question: string;
}
