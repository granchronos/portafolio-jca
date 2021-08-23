import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {ItemTimeLineModel} from '../../data/schema/itemTimeLine.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private readonly urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.backend.host;
  }

  getExperience() {
    return this.httpClient.get(`${this.urlApi}/experience.json`).pipe(map(this.buildArray));
  }


  private buildArray(experienceObject: object) {
    const experienceList: ItemTimeLineModel[] = [];
    if (experienceObject === null) {
      return [];
    }
    Object.keys(experienceObject).forEach(key => {
      const experience: ItemTimeLineModel = experienceObject[key];
      experience.id = key;
      experienceList.push(experience);
    });
    return experienceList;
  }


}
