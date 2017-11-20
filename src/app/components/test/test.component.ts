import { Component, OnInit } from '@angular/core';
import { TestService} from '../../services/test.service';
// import { AuthComponent} from 'auth/auth.component';
@Component({
  selector: 'test',
  //template: 'This is a Test Component <br>{{title}} <br>    {{TestRecords.ID}} "{{TestRecords.TEXT_VAR_128}}" {{TestRecords.TEXT_TEXT}}  '
   templateUrl: './test.template.html',
   providers: [TestService] //each API data providen need to be included here
  // styleUrls: ['./app.component.css']
})
export class TestComponent implements OnInit{
  title: string;
  TestRecords : TestRecordsType;
  TestArray : TestRecordsType[];
  APIArray: TestRecordsType[];

  constructor (private testService: TestService){ }
  ngOnInit(){
    this.title =  'Lets rock!';
    this.TestRecords = {ID:1,TEXT_VAR_128:"Page1",TEXT_TEXT:"Some page 1"};
    this.TestArray =   [{"ID":1,"TEXT_VAR_128":"Page1","TEXT_TEXT":"Some page 1"}
      ,{"ID":2,"TEXT_VAR_128":"Page 2","TEXT_TEXT":"Some page 2"}
      ,{"ID":3,"TEXT_VAR_128":"Page 3","TEXT_TEXT":"Some page 3"}];
    console.log('Test Component Ran');
    // this.testService.getTestData().subscribe(TestArray => console.log(TestArray));
      this.testService.getTestData().subscribe(TestArray => this.APIArray = TestArray);
  }
}

interface TestRecordsType {
  ID: number;
  TEXT_VAR_128: string;
  TEXT_TEXT: string;
}
