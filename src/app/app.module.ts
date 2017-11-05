import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//First Page Module seems like should be routed or somehow called.
//FirstPageComponent it shows that it being running using Console.Log but display nothing
import { FirstPageModule } from './pages/first-page/first-page.module';
import { TestComponent } from './components/test/test.component';
import { navItemContent} from './components/nav-item/nav-item';
import { HeaderComponent} from './components/header/header.component';
import { NgbdAlertCloseable } from './components/alert-closeable/alert-closeable';
import { GmapsComponent } from './components/googlemaps/googlemaps.component';
import {firstLayout} from './components/firstLayout/firstLayout';
import {innerLayoutContent} from './components/innerLayout/innerLayout';


@NgModule({
  //Declaration of Internal Application Components
  declarations: [
    AppComponent,
     TestComponent,
     NgbdAlertCloseable,
      navItemContent,
     HeaderComponent,
     GmapsComponent,
     firstLayout,
     innerLayoutContent
  ],
  //External Angular and Other Vendors Modules
  imports: [
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyCESyzus6Bs7X-5_-38X0bkqJjD9ATRJVI'
   }),
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    FirstPageModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
