import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  images = [
    {path: '../../../../../assets/img/companies/BBF-logo.jpg'},
    {path: '../../../../../assets/img/companies/EFX-logo.png'},
    {path: '../../../../../assets/img/companies/EXP-logo.png'},
    {path: '../../../../../assets/img/companies/BBVA-logo.png'},
    {path: '../../../../../assets/img/companies/ITR-logo.jpg'},
    {path: '../../../../../assets/img/companies/MVT-logo.jpg'},
    {path: '../../../../../assets/img/companies/SR-logo.jpg'},
    {path: '../../../../../assets/img/companies/KR-logo.png'},
    {path: '../../../../../assets/img/companies/BCP-logo.jpg'},
    {path: '../../../../../assets/img/companies/EVR-logo.jpg'},
    {path: '../../../../../assets/img/companies/TDP-logo.jpg'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
