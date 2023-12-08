import { Component, OnInit } from '@angular/core';
export interface WorkerData {
  id: number,
  name: string
}
@Component({
  selector: '#app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverName  =""
  allowNewServer = false
  serverCreationStatus = 'No server was created! '
  worker:Worker
  workerData: WorkerData[] = []
  workerId: number = 1

  constructor() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker = new Worker(new URL('./app.worker', import.meta.url));
      this.worker.onmessage = ({ data }) => {

        this.workerData = JSON.parse(data)

      };
      this.worker.postMessage(String(this.workerId));

    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }

  }

  trackById(index, item) {
    return item.id
  }

  getData(): void {
    this.worker.postMessage(this.workerId);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! "+ this.serverName
    this.allowNewServer = true
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  getBackground() {
    return this.workerId > 10 ? "red" : "yellow"
  }



}
