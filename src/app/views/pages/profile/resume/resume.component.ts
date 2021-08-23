import {Component, OnInit} from '@angular/core';
import {EducationService} from '../../../../core/services/education.service';
import {ItemTimeLineModel} from '../../../../data/schema/itemTimeLine.model';
import {SkillService} from '../../../../core/services/skill.service';
import {SkillModel} from '../../../../data/schema/skill.model';
import {ExperienceService} from '../../../../core/services/experience.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  educationList: ItemTimeLineModel[] = [];
  experienceList: ItemTimeLineModel[] = [];
  skillList: SkillModel[] = [];
  skillListFront: SkillModel[] = [];
  skillListBack: SkillModel[] = [];
  skillListCloud: SkillModel[] = [];

  constructor(private educationService: EducationService,
              private experienceService: ExperienceService,
              private skillService: SkillService) {
  }

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(resp => {
      this.educationList = resp;
      this.educationList.reverse();
    });
    this.experienceService.getExperience().subscribe(resp => {
      this.experienceList = resp;
      this.experienceList.reverse();
    });

    this.skillService.getSkills().subscribe(resp => {
      this.skillList = resp;
      this.skillListFront = this.skillList.filter(value => value.type === 'F');
      this.skillListBack = this.skillList.filter(value => value.type === 'B');
      this.skillListCloud = this.skillList.filter(value => value.type === 'C');
    });


  }

}
