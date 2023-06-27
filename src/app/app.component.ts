import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //to send messages parent > child:
  msg: {type: string, text: string} = {type: 'success', text: 'Server has been added'} 
}
