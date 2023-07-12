import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { MessageComponent } from './components/message/message.component';
import { FormsModule } from '@angular/forms';
import { MsgDirective } from './directives/msg.directive';
import { LoggingService } from './services/logging.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MessageComponent,
    MsgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [LoggingService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
