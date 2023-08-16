import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

export class CommonService {
  private usernameSource = new BehaviorSubject<string>('');
  username = this.usernameSource.asObservable()
  
  constructor() { }
  
  changeUsername(username: string) {
    this.usernameSource.next(username);
  }
}