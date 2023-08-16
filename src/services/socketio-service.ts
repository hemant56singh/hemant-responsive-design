import { Injectable } from "@angular/core";
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable ({
    providedIn: 'root'
})

export class SocketioService {

    socket: any
  
    constructor( ) {
        this.setupSocketConnection();
       }
  
    setupSocketConnection() {
      this.socket = io('http://localhost:3000');
    }

    getSocketConnection() {
      return this.socket;
    }

    sendMessage(msg: string) {
      this.socket.emit('message', msg);
    }

    // getMessage() {
    //   return this.socket.fromEvent('message').pipe(map((data: any) => data.msg));
    // }

  }