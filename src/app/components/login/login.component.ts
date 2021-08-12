import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isSignedIn = false

  constructor(private firebaseService :FirebaseService, private router :Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn =true
    else
    this.isSignedIn = false
  }

  async onLogin(email:string, password:string){
    await this.firebaseService.login(email,password)
    if(this.firebaseService.isLoggedIn)
    this.router.navigate(['home']);
    this.isSignedIn = true
  }

}
