import {Component, OnInit} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-sheet',
  templateUrl: './menu-sheet.component.html',
  styleUrls: ['./menu-sheet.component.scss']
})
export class MenuSheetComponent implements OnInit {

  constructor(private route: Router,
              private _bottomSheetRef: MatBottomSheetRef<MenuSheetComponent>) {
  }

  ngOnInit(): void {
  }

  dismissMenu() {
    this._bottomSheetRef.dismiss();
  }

}
