import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus="No Server Was Created!";
  serverName='Test Server';
  serverCreated=false;
  servers=['testServer','testServer 2'];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    //this.serverCreationStatus="Server Was Created!Name is "+this.serverName;
    this.servers.push(this.serverName)
    this.serverCreated=true;
  }
  onUpdateServerName(event:Event){
    //console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;

  }

}
