import { Injectable}      from '@angular/core';
import { Http }           from '@angular/http';
import { environment }    from '../../environments/environment';
import                         'rxjs/add/operator/map';

// let global = new Globals;
@Injectable()
export class TestService{
  constructor(private http: Http){
    console.log('Test Service Initialized.');
    // console.log(GlobalVariables['GOOGLE_API_KEY']);
  }
  getTestData(){
    return this.http.get(environment.crud_php_api+'/testme/1,2')
       .map(res => res.json());
  }
}
