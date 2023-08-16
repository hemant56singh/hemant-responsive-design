import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

allData: any = [];


  constructor(private toastrService: ToastrService) { }

  signupForm = new FormGroup({
      fName: new FormControl('', []),
      mName: new FormControl('', []),
      lName: new FormControl('', []),
      dob: new FormControl('', []),
      mobile: new FormControl('', []),
      email: new FormControl('', []),
      addLine1: new FormControl('', []),
      addLine2: new FormControl('', []),
      city: new FormControl('', []),
      state: new FormControl('', []),
      password: new FormControl('', []),
  })

  ngOnInit(): void {
  
  }


  saveData(){
    const formData = this.signupForm.value;
    const obj = {
      fName: formData.fName,
      mName: formData.mName,
      lName: formData.lName,
      date: moment(formData.dob).format('DD/MM/YYYY'),
      mobile: formData.mobile,
      email: formData.email,
      addLine1: formData.addLine1,
      addLine2: formData.addLine2,
      city: formData.city,
      state: formData.state,
      password: formData.password
    }

    this.allData.push(obj);
    const data = JSON.stringify(this.allData)
    localStorage.setItem('Data', data);
    this.signupForm.reset();
    this.toastrService.success("Successfull")

  }


}
