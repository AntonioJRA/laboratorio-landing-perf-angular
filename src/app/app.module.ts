import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgChartsModule } from 'ng2-charts';
// import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { TimeAgoPipe } from './shared/pipes/time-ago.pipe';
// import { NavbarComponent } from './home/components/navbar/navbar.component';
// import { HeroComponent } from './home/components/hero/hero.component';
// import { SummaryComponent } from './home/components/summary/summary.component';
// import { SnippetsComponent } from './home/components/snippets/snippets.component';
// import { FeaturesComponent } from './home/components/features/features.component';
// import { StatsComponent } from './home/components/stats/stats.component';
// import { IntegrationsComponent } from './home/components/integrations/integrations.component';
// import { CustomersComponent } from './home/components/customers/customers.component';
// import { ContactComponent } from './home/components/contact/contact.component';
// import { ImgComponent } from './shared/components/img/img.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
