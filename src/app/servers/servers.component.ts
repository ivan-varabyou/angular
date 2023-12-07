import { Component, OnInit } from '@angular/core';

@Component({
  selector: '#app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],

})
export class ServersComponent implements OnInit {
  serverName  =""
  allowNewServer = false
  serverCreationStatus = 'No server was created!'
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    } , 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!"
    setTimeout(() => {
      this.allowNewServer = false
      this.serverCreationStatus = 'No server was created!'
      setTimeout(() => {
        this.allowNewServer = true
      }, 2000)
    } , 2000)
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
