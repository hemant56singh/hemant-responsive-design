import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoAdapter } from '../../app/demo-adapter';
import { IChatController, ChatParticipantType, ChatParticipantStatus, User, ChatAdapter } from 'ng-chat';
import { SocketioService } from 'src/services/socketio-service';
import { io } from "socket.io-client";

declare var $: any;

@Component({
  selector: 'app-shopping-dashboard',
  templateUrl: './shopping-dashboard.component.html',
  styleUrls: ['./shopping-dashboard.component.css']
})
export class ShoppingDashboardComponent implements OnInit {

  @ViewChild('ngChatInstance', { static: true })
  protected ngChatInstance : IChatController | undefined;
  user: User = {
    participantType: ChatParticipantType.User,
    id: 10,
    displayName: 'Aryana Stark',
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    status: ChatParticipantStatus.Online,
  };
  name = 'Angular';
  userId = 999;
  public adapter: ChatAdapter = new DemoAdapter();

  openUserChat() {
    this.ngChatInstance?.triggerOpenChatWindow(this.user);
  }

  constructor( private socketService: SocketioService ) {

   }

  ngOnInit(): void {
    // const socket  = this.socketService.setupSocketConnection();
    // socket.on('Message Added', function(data:any) {
    //   console.log(data);
    // })


  }


  showModel(){
    var modal: any = document.getElementById('modalRegisterForm');
    console.log("modal", modal);    
    modal.style.display = "block";
    modal.style.opacity=1;

  }


  sendMessageToServer(){
    const msg = "Hi this is client side"
    this.socketService.sendMessage(msg);
    console.log('inside');
    
  }

}
