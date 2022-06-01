import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css']
})

export class UsernameCheckComponent implements OnInit {
  allowNewUsername:boolean = false;
  usernameCreationStatus = 'Nothing was created!';
  userName = 'TestUsername';

  constructor() {
  setTimeout(() => {
  this.allowNewUsername = true;
   }, 2000);
  }

  ngOnInit() {
  }

  // onCreateUsername () {
  // this.usernameCreationStatus = 'Username was created! Username name is ' + this.userName;
  // }

  onCreateUsername () {
    this.usernameCreationStatus = 'Username was created! Username name is ' + this.userName;
    this.userName = ''; // reset the username
  }

  onUpdateUserName(event:Event) {
  this.userName = (<HTMLInputElement>event.target).value;
   }
}



// @Component({
//   selector: 'app-servers',
//   // selector: '[app-servers]',
//   templateUrl: './servers.component.html',
//   // template: `
//   // <section>
//   // <h1>I'm in the Servers Component</h1>
//   // <p>Below this I have 2 Server Components</p>
//   // <app-server></app-server>
//   // <app-server></app-server>
//   // </section>
//   // `,
//   styleUrls: ['./servers.component.css']
// })
// export class ServersComponent implements OnInit {
//   allowNewServer:boolean = false;
//   serverCreationStatus = 'No server was created!';
//   serverName = 'TestServer';

//   constructor() {
//     setTimeout(() => {
//       this.allowNewServer = true;
//     }, 2000);
//    }

//   ngOnInit(): void {
//   }

//   onCreateServer () {
//     this.serverCreationStatus = 'Server was created! Server name is ' + this.serverName;
//   }

//   onUpdateServerName(event:Event) {
//     this.serverName = (<HTMLInputElement>event.target).value;
//   }

// }
