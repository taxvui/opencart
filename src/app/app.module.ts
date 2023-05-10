import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FeatureComponent } from './cms/feature/feature.component';
import { BlogComponent } from './cms/blog/blog.component';
import { DownloadComponent } from './cms/download/download.component';
import { DemoComponent } from './cms/demo/demo.component';
import { ExtensionComponent } from './marketplace/extension/extension.component';
import { ShowcaseComponent } from './cms/showcase/showcase.component';
import { ContactComponent } from './support/contact/contact.component';
import { PartnerComponent } from './support/partner/partner.component';
import { CompanyComponent } from './cms/company/company.component';
import { PolicyComponent } from './cms/policy/policy.component';
import { Cart2cartComponent } from './cms/cart2cart/cart2cart.component';
import { SupportComponent } from './support/support/support.component';
import { AdvertiseComponent } from './support/advertise/advertise.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { LandingComponent } from './cloud/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FeatureComponent,
    BlogComponent,
    DownloadComponent,
    DemoComponent,
    ExtensionComponent,
    ShowcaseComponent,
    ContactComponent,
    PartnerComponent,
    CompanyComponent,
    PolicyComponent,
    Cart2cartComponent,
    SupportComponent,
    AdvertiseComponent,
    PagenotfoundComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
