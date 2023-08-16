import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShoppingAppServices } from 'src/services/shopping-app-services';
import { SocketioService } from 'src/services/socketio-service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor( private toastrService : ToastrService, private shoppingServices: ShoppingAppServices, private router: Router, private socketService: SocketioService) { }

  isLoading: boolean = false;
  chat: any;
  userId: any;


  ngOnInit(): void {
    const userdata: any = localStorage.getItem('user');
    const user: any = JSON.parse(userdata);
    this.userId = user._id;
    this.getAllMessagesByUserId(this.userId);
    const socket  = this.socketService.getSocketConnection();
    socket.on('Message Added', () => {
      this.getAllMessagesByUserId(this.userId);
    })

  }

  getAllMessagesByUserId(userID: any) {
    this.shoppingServices.getAllMessages(userID).subscribe((res: any) => {
      if(res.status == 200){
        this.chat = res.chat;
        this.toastrService.success(res.message);
      }
      else{
        this.isLoading = false;
        this.toastrService.info(res.message);
      }
    })  
  }


  addToMessages() {
    const input: any = document.getElementsByClassName('publisher-input');
    const value = input[0].value;
    if (!value) {
      return false;
    }
    this.sendMessages(value);

    input[0].value = ''
    return true;
  }


  sendMessages(message: any){
    try {
      const obj = {
        userId: this.userId,
        message: message ,
        senderId: this.userId         
      }
      this.isLoading = true;
      this.shoppingServices.sendMessage(obj, {}).subscribe((res: any) => {
        if(res.status == 200){
          this.chat.messages.push({
            userId: this.userId,
            message: message
          })
          this.toastrService.success(res.message);
        }
        else{
          this.isLoading = false;
          this.toastrService.info(res.message);
        }
      })      
    } catch (error) {
      this.isLoading = false;
      this.toastrService.error("Something went wrong");      
    }

  }

}
