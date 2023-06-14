import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() message!: { type: string, text: string }

  types: string[] = ['success', 'info', 'warning', 'danger'];

  constructor() {}

  getClass(type: string) {
    return (this.types.includes(type)) ? 'alert-' + type : 'alert-info'
  }

}
