import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './views/shared/shared.module';
import {BlogModule} from './views/pages/blog/blog.module';
import {ProfileModule} from './views/pages/profile/profile.module';
import {ComponentsModule} from './views/components/components.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule,
    ProfileModule,
    BlogModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
