import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment }        from '../../environments/environment';
import {User} from '../components/forms/user';

@Injectable()

export class postformService {

  constructor(private http: Http) {}

  postData(user: User){
            // console.log(user);
            const body = {name: user.name, phone: user.phone, email: user.email};
            return this.http.post(environment.sendmail, body);
        }



}
