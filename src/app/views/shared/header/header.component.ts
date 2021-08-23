import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MenuSheetComponent} from '../menu-sheet/menu-sheet.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) {
  }

  ngOnInit(): void {
  }

  openMenu() {
    console.log('click');
    this._bottomSheet.open(MenuSheetComponent);
    // Swal.fire({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   icon: 'error',
    //   confirmButtonText: 'Cool'
    // });
  }

}
