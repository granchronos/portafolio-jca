import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SkillModel} from '../../data/schema/skill.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private readonly urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.backend.host;
  }

  getSkills() {
    return this.httpClient.get(`${this.urlApi}/skills.json`).pipe(map(this.buildArray));
  }

  private buildArray(skillObject: object) {
    const skillList: SkillModel[] = [];
    if (skillObject === null) {
      return [];
    }
    Object.keys(skillObject).forEach(key => {
      const skill: SkillModel = skillObject[key];
      skill.id = key;
      skillList.push(skill);
    });
    return skillList;
  }

}
