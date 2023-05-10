import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { DemoComponent } from './cms/demo/demo.component';
import { FeatureComponent } from './cms/feature/feature.component';
import { BlogComponent } from './cms/blog/blog.component';
import { ShowcaseComponent } from './cms/showcase/showcase.component';
import { CompanyComponent } from './cms/company/company.component';
import { PolicyComponent } from './cms/policy/policy.component';
import { Cart2cartComponent } from './cms/cart2cart/cart2cart.component';
import { LandingComponent } from './cloud/landing/landing.component';
import { ExtensionComponent } from './marketplace/extension/extension.component';
import { DownloadComponent } from './cms/download/download.component';

import { SupportComponent } from './support/support/support.component';
import { ContactComponent } from './support/contact/contact.component';
import { PartnerComponent } from './support/partner/partner.component';
import { AdvertiseComponent } from './support/advertise/advertise.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cms/demo', component: DemoComponent },
  { path: 'cms/feature', component: FeatureComponent },
  { path: 'cms/download', component: DownloadComponent },
  { path: 'cms/blog', component: BlogComponent },
  { path: 'cms/showcase', component: ShowcaseComponent },
  { path: 'cms/company', component: CompanyComponent },
  { path: 'cms/policy', component: PolicyComponent },
  { path: 'cms/cart2cart', component: Cart2cartComponent },
  { path: 'cloud/landing', component: LandingComponent },
  { path: 'marketplace/extension', component: ExtensionComponent },

  { path: 'support/support', component: SupportComponent },
  { path: 'support/contact', component: ContactComponent },
  { path: 'support/partner', component: PartnerComponent },
  { path: 'support/advertise', component: AdvertiseComponent },

  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
