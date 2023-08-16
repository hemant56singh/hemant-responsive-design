import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocketioService } from 'src/services/socketio-service';
import { ShoppingAppServices } from '../../../src/services/shopping-app-services';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @ViewChild('toggleButton') toggleButton: any= ElementRef;
  @ViewChild('register') register: any = ElementRef;


  constructor( private toastrService : ToastrService, private fb: FormBuilder, private shoppingServices: ShoppingAppServices,
    private socketService:  SocketioService, private router: Router, private renderer: Renderer2 ) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  sigupForm = new FormGroup({
    name: new FormControl('', [Validators.required] ),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])

  })

  
  isLoading: boolean = false;

  ngOnInit(): void {
  }


  addUser(){
    const name = this.sigupForm.get('name')?.value;
    const email = this.sigupForm.get('email')?.value;
    const password = this.sigupForm.get('password')?.value;
    try {
      const obj = {
        name: name,
        email: email,
        password: password,
      }
      this.isLoading = true;
      this.shoppingServices.registerUser(obj, {}).subscribe((res: any) => {
        if(res.code == 200){
          this.isLoading = false;
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


  login(){
    const email: any = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    try {
      const obj = {
        email: email,
        password: password,
      }
      this.isLoading = true;
      this.shoppingServices.loginUser(obj, {}).subscribe((res: any) => {
        if(res.status == 200){
          this.isLoading = false;
          this.socketService.setupSocketConnection();
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.toastrService.success(res.message);
          this.router.navigateByUrl('support')
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


  clearModel() {
    this.sigupForm.reset();
  }


}
