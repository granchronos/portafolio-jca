import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../../../core/services/home.service';
import {BioModel} from '../../../../data/schema/bio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bioModel: BioModel = new BioModel();

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.getBio().subscribe(resp => {
      this.bioModel = resp;
      console.log(this.bioModel);
      localStorage.setItem('bio-info', JSON.stringify(this.bioModel));
      console.log(JSON.stringify(this.bioModel));
    });
  }


}
