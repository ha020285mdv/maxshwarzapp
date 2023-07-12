import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {

  @Input() message!: { type: string, text: string }

  types: string[] = ['success', 'info', 'warning', 'danger'];

  constructor(
    private msg: MessageService,
    private readonly changeDetector: ChangeDetectorRef
    ) {
      this.msg.newMessage.subscribe(
          (msg: { type: string, text: string }) =>  {
            this.message = msg
          }
      );
  }
  
  getClass(type: string) {
    return (this.types.includes(type)) ? 'alert-' + type : 'alert-info'
  }

}
