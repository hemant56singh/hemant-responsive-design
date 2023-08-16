import { Component, OnInit, Input  } from '@angular/core';
import { CommonService } from 'src/services/common.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() message: string;

  constructor(private state: CommonService) { }

  msg: any;

  ngOnInit(): void {
    this.state.username.subscribe(result => {
      this.msg = result;
    });
    this.function();
  }

  function(){
    let a = [2,2,3,6,6,9,10];
    for(let i=1; i<=10; i++){
    var isExist = false;
      for(let j=0; j<a.length; j++){
        if(i == a[j]){
        isExist = true;
        break;
        }
      }
      if(!isExist){
      console.log("xx", i)
      }
    }
  }



}
