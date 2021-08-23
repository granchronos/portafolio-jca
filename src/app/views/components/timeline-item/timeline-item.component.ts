import {Component, Input, OnInit} from '@angular/core';
import {ItemTimeLineModel} from '../../../data/schema/itemTimeLine.model';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.css']
})
export class TimelineItemComponent implements OnInit {

  @Input('item-data') item: ItemTimeLineModel;
  @Input() type = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  showDetails() {
    window.open('https://www.linkedin.com/in/jcantony29/', '_blank');

  }
}
