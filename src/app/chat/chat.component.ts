import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation;

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submitMessage(e): void {
    let value = e.target.value.trim();
    e.target.value = '';
    if(value.length < 1) return;
    this.conversation.latestMessage = value;
    this.conversation.messages.unshift({
      id: 1,
      body:value,
      time: '8:21',
      me: true,
    });
  }
}
