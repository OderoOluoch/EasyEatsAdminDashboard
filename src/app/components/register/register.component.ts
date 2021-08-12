import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSignedIn = false;

  constructor(public firebaseService : FirebaseService) { }
  
  ngOnInit(): void {
    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async onRegister(email:string, password:string){
    await this.firebaseService.register(email,password);
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

}
