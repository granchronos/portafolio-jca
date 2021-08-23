import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ProfileRoutingModule} from "./profile-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import {ServicesComponent} from './services/services.component';
import {ContactComponent} from './contact/contact.component';
import {ComponentsModule} from "../../components/components.module";
import {MatTooltipModule} from "@angular/material/tooltip";
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [
    PortfolioComponent,
    HomeComponent,
    ResumeComponent,
    ServicesComponent,
    ContactComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        SharedModule,
        ComponentsModule,
        MatTooltipModule,
        IvyCarouselModule,
        MatFormFieldModule,
        MatButtonModule,
        MatChipsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule {
}
