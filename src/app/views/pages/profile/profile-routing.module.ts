import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ResumeComponent} from "./resume/resume.component";
import {ServicesComponent} from "./services/services.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'resume',
    component: ResumeComponent
  }, {
    path: 'services',
    component: ServicesComponent
  }, {
    path: 'portfolio',
    component: PortfolioComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
