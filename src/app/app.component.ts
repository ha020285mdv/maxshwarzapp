import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //to send messages from parent to child:
  msg: {type: string, text: string} = {type: 'warning', text: 'Servers are overloaded'} 


}
