import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShoppingDashboardComponent } from './shopping-dashboard/shopping-dashboard.component';
import { NgChatModule } from 'ng-chat';
import { SocketioService } from 'src/services/socketio-service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SupportComponent } from './support/support.component';
// const config: SocketIoConfig = { 
//   url: 'http://localhost:3000', 
//   options: {} 
// };



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ShoppingDashboardComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChatModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    // SocketIoModule.forRoot(config)

  ],
  providers: [ ToastrService, SocketioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
