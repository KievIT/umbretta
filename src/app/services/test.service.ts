import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService{
  constructor(private http: Http){
    console.log('Test Service Initialized.');
  }
  getTestData(){
    return this.http.get('http://localhost/api.php/testme/1,2')
       .map(res => res.json());
  }
}
