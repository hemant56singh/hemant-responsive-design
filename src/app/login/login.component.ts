import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private toastrService: ToastrService) { }

  loginForm = new FormGroup ({
    email: new FormControl('', []),
    password: new FormControl('', [])
  })

  ngOnInit(): void {
  }

  goToSignUp(){
    this.router.navigateByUrl('signup');
  }


  goToDashboard(){
    let valid = false;
    const data: any = localStorage.getItem('Data')
    const xx = JSON.parse(data);
    const formEmail = this.loginForm.value.email;
    const formPass = this.loginForm.value.password;
    const index = xx.findIndex((x: any) =>  x.email == formEmail && x.password == formPass);
    const ss = xx.map((x: any) =>  x.email );
    const aa = xx.find((x: any) =>  x.email == formEmail);
    console.log("ss", ss, "aa", aa);
    if(index >= 0){
      this.toastrService.success("Successfull")
      this.router.navigateByUrl('dashboard');
    }else{
      this.toastrService.info('Invalid login details');
    }
  }

}
