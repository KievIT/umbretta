import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
// let global = new Globals;
@Injectable()
export class TestService{
  constructor(private http: Http){
    console.log('Test Service Initialized.');
    // console.log(GlobalVariables['GOOGLE_API_KEY']);
  }
  getTestData(){
    return this.http.get('http://localhost/tmp/rest-api/api.php/testme/1,2')
       .map(res => res.json());
  }
}
