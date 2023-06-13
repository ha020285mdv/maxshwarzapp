import { Component } from '@angular/core';


interface IServer {
  name: string | null;
  inUse: number;
  withHtml(): string;
  progressClass(): string;
}


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  servers_list: IServer[] = [];
  allowAddingServer: boolean = true;
  serverCreationStatus: string = 'No server was created';
  servername: string = '';
  message: string = '';
   

  constructor() {
    this.createServerComponent("Apple");
    this.createServerComponent("AWS");
    this.createServerComponent("IBM");
    this.createServerComponent("Samsung");
    this.onSortServersDesc();
  }

  createServerComponent(serverName: string) {
    this.servers_list.push({
      name: serverName,
      inUse: Math.random(),
      withHtml(): string {
        return `style="width: ${this.inUse * 100}%"`
      },
      progressClass(): string {
        if (this.inUse < 0.25) 
          {return "info"}
        else if (this.inUse < 0.65) 
          {return "success"}
        else if (this.inUse < 0.90) 
          {return "warning"}
        else 
          {return "danger"}
      },
    })
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
        this.servername = '';
        this.allowAddingServer = false;
        this.enableAddServer(2000);
    }
    else {
      this.message = 'Server already exists'
    }

  }

  onDeleteServer(server: IServer) {
    this.servers_list.forEach((value,index)=>{
      if(value.name==server.name) this.servers_list.splice(index,1);
    });
  }

  onSortServersAsc() {
    this.servers_list.sort((a, b) => (a.inUse < b.inUse ? -1 : 1));
  }

  onSortServersDesc() {
    this.servers_list.sort((a, b) => (a.inUse > b.inUse ? -1 : 1));
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


