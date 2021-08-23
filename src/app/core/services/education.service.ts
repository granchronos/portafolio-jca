import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {ItemTimeLineModel} from '../../data/schema/itemTimeLine.model';


@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private readonly urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.backend.host;
  }

  getEducation() {
    return this.httpClient.get(`${this.urlApi}/education.json`).pipe(map(this.buildArray));
  }


  private buildArray(educationObject: object) {
    const educationList: ItemTimeLineModel[] = [];
    if (educationObject === null) {
      return [];
    }
    Object.keys(educationObject).forEach(key => {
      const education: ItemTimeLineModel = educationObject[key];
      education.id = key;
      educationList.push(education);
    });
    return educationList;
  }


}
