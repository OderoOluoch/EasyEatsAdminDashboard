import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.css']
})
export class SideBarMenuComponent implements OnInit {

  constructor(public firebaseService :FirebaseService) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout()
  }



}
