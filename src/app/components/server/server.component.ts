import { Component } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';


interface IServer {
  name: string | null;
  inUse: number;
}


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  providers: [LoggingService]
})
export class ServerComponent {

  servers_list: IServer[] = [];
  allowAddingServer: boolean = true;
  serverCreationStatus: string = 'No server was created';
  servername: string = '';
  message: string = '';
  sortedDesc: boolean = false;
  

  constructor(private log: LoggingService) {
    this.createServerComponent("Apple");
    this.createServerComponent("AWS");
    this.createServerComponent("IBM");
    this.createServerComponent("Samsung");
    setTimeout(() => {this.onSortServers()}, 1000);
    this.log.logStatusChange(`List of servers has been created`)
  }

  createServerComponent(serverName: string) {
    this.servers_list.push({
      name: serverName,
      inUse: Math.random()
    })
    this.log.logStatusChange(`Server ${serverName} has been created`)
  }

  enableAddServer(interval: number) {
    setTimeout(() => {
      this.allowAddingServer = true;
    }, interval);
  }

  onUpdateServerName() {
    if (this.servers_list.find(
      element => element.name == this.servername
      ) == undefined
      ) {
        this.createServerComponent(this.servername);
        this.sortedDesc = false;
        setTimeout(() => {this.onSortServers()}, 1000);
        this.servername = '';
        this.allowAddingServer = false;
        this.enableAddServer(2000);
    }
    else {
      this.message = 'Server already exists';
      this.log.logStatusChange(`Denied to create server ${this.servername}: already exists`);
    }

  }

  onDeleteServer(server: IServer) {
    this.servers_list.forEach((value,index)=>{
      if(value.name==server.name) {
        this.servers_list.splice(index,1);
        this.log.logStatusChange(`Server ${server.name} has been deleted`)
      };
    });
  }

  onSortServers() {
    if (this.sortedDesc)
    {
      this.servers_list.sort((a, b) => (a.inUse < b.inUse ? -1 : 1));
      this.sortedDesc = false
    }
    else
    {
      this.servers_list.sort((a, b) => (a.inUse > b.inUse ? -1 : 1));
      this.sortedDesc = true
    }
  }

  getServerLoading(using: number): string {
    return `${using * 100}%`
  }

  getServerStatus(using: number): string {
    if (using < 0.25) 
        {return "info"}
      else if (using < 0.65) 
        {return "success"}
      else if (using < 0.90) 
        {return "warning"}
      else 
        {return "danger"}
  }

}


