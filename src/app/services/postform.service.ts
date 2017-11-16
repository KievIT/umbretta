import { Injectable }     from '@angular/core';
import { Http }           from '@angular/http';
import { environment }    from '../../environments/environment';
import { User}            from '../components/forms/user';

@Injectable()

export class postformService {

  constructor(private http: Http) {}

  postDataUser(user: User){
            console.log("Sending an email....");
            const body =
              {
                  name: user.name
                , phone: user.phone
                , email: user.email
                , city: user.city
                , question:user.question
              };
            //JSON.stringify adding quotes "" to standard JSON array keys
            //this being used by PHP json_decode function
            console.log(JSON.stringify(body));
            return this.http.post(environment.sendmail, JSON.stringify(body));
        }



}
