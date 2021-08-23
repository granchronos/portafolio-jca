import {Component, Input, OnInit} from '@angular/core';
import {SkillModel} from '../../../data/schema/skill.model';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillBarComponent implements OnInit {

  @Input() skill: SkillModel;
  @Input() category = '';
  progressBar = ['progress-bar'];
  progress = ['progress'];

  constructor() {
  }

  ngOnInit(): void {
    this.progressBar.push(`bg-${this.category}`);
    this.progress.push(`bd-${this.category}`);
  }

}
