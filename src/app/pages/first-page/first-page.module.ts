import { NgModule } from '@angular/core';
import { FirstPageComponent } from './first-page.component';
//import { DashboardModule } from './dashboard/dashboard.module';
//import { PagesRoutingModule } from './pages-routing.module';
//import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [

    // PagesRoutingModule,
    // ThemeModule,
    // DashboardModule,
  ],
  declarations: [FirstPageComponent],
  bootstrap: [FirstPageComponent],

})
export class FirstPageModule {

}
