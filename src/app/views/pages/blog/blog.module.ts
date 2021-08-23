import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogComponent} from "./blog/blog.component";
import {BlogRoutingModule} from "./blog-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogModule {
}
