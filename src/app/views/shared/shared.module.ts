import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {MenuSheetComponent} from './menu-sheet/menu-sheet.component';
import {MatListModule} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ChatButtonComponent } from './chat-button/chat-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuSheetComponent,
    ChatButtonComponent,
  ],
  exports: [
    HeaderComponent,
    ChatButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatBottomSheetModule
  ]
})
export class SharedModule {
}
