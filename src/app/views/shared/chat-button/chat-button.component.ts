import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-button',
  template: `
    <div>
      <a
        href="https://wa.me/message/AE6QL7XR7LQ3A1"
        target="_blank">
        <img src="../../../../assets/img/icons/icon-whatsapp.svg" alt="" class="float">
      </a>
    </div>`,
  styleUrls: ['./chat-button.component.css']
})
export class ChatButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
