import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  newMessage = new EventEmitter<{ type: string, text: string }>();

}
