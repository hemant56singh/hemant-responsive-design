import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl, Form } from '@angular/forms';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../services/common.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allData: any = [];
  editRowData: any;
  selectedIndex: any;
  parentMessage: any = "Hello from parent"
  username: any = "Hello from parent"

  constructor(private toastrService: ToastrService, private fb: FormBuilder, private state: CommonService) { }

  editForm = new FormGroup({
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

  dataform: FormGroup

  ngOnInit(): void {
    // this.dataform = this.fb.group ({
    //   lessons: this.fb.array([])
    // });
    const xx: any = localStorage.getItem('Data');
    this.allData = JSON.parse(xx)
    this.allData.forEach((x: any) => moment(x.date).format('YYYY-MM-DD'))

  }

  // get lessons(): FormArray {
  //   return <FormArray>this.dataform.get("lessons");
  // }

  editData(data: any, index: any) {
    this.selectedIndex = index;
    this.editForm.patchValue({
      fName: data?.fName,
      mName: data?.mName,
      lName: data?.lName,
      dob: moment(data?.date).format('YYYY-MM-DD'),
      mobile: data?.mobile,
      email: data?.email,
      addLine1: data?.addLine1,
      addLine2: data?.addLine2,
      city: data?.city,
      state: data?.state,
      password: data?.password,
    })
    let modal: any = document.getElementById('myModal');
    modal.style.display = 'block';
  }

  closeModal() {
    let modal: any = document.getElementById('myModal');
    modal.style.display = 'none'
  }


  updateData() {
    const selectedData = this.allData[this.selectedIndex]
    const formVal = this.editForm.value;
    selectedData.fName = formVal.fName;
    selectedData.mName = formVal.mName;
    selectedData.lName = formVal.lName;
    selectedData.date = moment(formVal.dob).format('DD/MM/YYYY');
    selectedData.mobile = formVal.mobile;
    selectedData.email = formVal.email;
    selectedData.addLine1 = formVal.addLine1;
    selectedData.addLine2 = formVal.addLine2;
    selectedData.city = formVal.city;
    selectedData.state = formVal.state;
    selectedData.password = formVal.password;
    const xx: any = JSON.stringify(this.allData)
    localStorage.setItem('Data', xx);
    this.toastrService.success("Data Updated Successfully")
    let modal: any = document.getElementById('myModal');
    modal.style.display = 'none'
  }


  // addLesson() {
  //   const lessonForm: any = this.fb.group({
  //     title: ['', Validators.required],
  //     level: ['beginner', Validators.required]
  //   });

  //   const control = this.dataform.get('lessions') as FormArray;
  //   control.push(lessonForm);
  // }

  // deleteLesson(lessonIndex: number) {
  //   const control = this.dataform.get('lessions') as FormArray;
  //   control.removeAt(lessonIndex);
  // }

  updateUsername() {
    this.state.changeUsername(this.username);
  }

}
