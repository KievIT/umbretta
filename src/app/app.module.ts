import { BrowserModule }          from '@angular/platform-browser';
import { APP_BASE_HREF }          from '@angular/common';
import { NgModule}                from '@angular/core';
import { HttpModule }             from '@angular/http';
import { AgmCoreModule }          from '@agm/core';
import { GoogleMapsAPIWrapper }   from '@agm/core/services/google-maps-api-wrapper';
import { AppComponent }           from './app.component';
import { FormsModule }            from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

//First Page Module seems like should be routed or somehow called.
//FirstPageComponent it shows that it being running using Console.Log but display nothing
import { environment }          from '../environments/environment';
// import { FirstPageModule }      from './pages/first-page/first-page.module';
import { TestComponent }        from './components/test/test.component';
import { navItemContent}        from './components/nav-item/nav-item';
import { HeaderComponent}       from './components/header/header.component';
import { NgbdAlert}             from  './components/alert-closeable/alert-closeable';
import { GmapsComponent }       from './components/googlemaps/googlemaps.component';
import { firstLayout}           from './components/firstLayout/firstLayout';
import { innerLayoutContent }   from './components/innerLayout/innerLayout';
import { secondLayout }         from './components/second-layout/second-layout.component';
import { FormsComponent }       from './components/forms/forms.component';
import { ContactComponent }     from './components/contact/contact.component';
import { MessageService }       from './services/message.service';
import { OpportunityComponent } from './components/opportunity/opportunity.component';

//let global = new Globals; //global parameters initialization
//console.log(GlobalVariables['PHP_API_PATH']);
// console.log(Global.PHP_API_PATH);

@NgModule({
  //Declaration of Internal Application Components
  declarations: [
      AppComponent,
      TestComponent,
      NgbdAlert,
      navItemContent,
      HeaderComponent,
      GmapsComponent,
      firstLayout,
      innerLayoutContent,
      secondLayout,
      FormsComponent,
      ContactComponent,
      OpportunityComponent,
  ],
  //External Angular and Other Vendors Modules
  imports: [
  //GoogleMaps initialization
     AgmCoreModule.forRoot({
          apiKey: environment.google_api_key
       ,language: environment.google_api_lang //https://www.petrelli.biz/tag/angular/
    }),
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [MessageService, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {
}
