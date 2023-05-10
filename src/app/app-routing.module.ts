import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { DemoComponent } from './cms/demo/demo.component';
import { FeatureComponent } from './cms/feature/feature.component';
import { LandingComponent } from './cloud/landing/landing.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cms/demo', component: DemoComponent },
  { path: 'cms/feature', component: FeatureComponent },
  { path: 'cloud/landing', component: LandingComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
