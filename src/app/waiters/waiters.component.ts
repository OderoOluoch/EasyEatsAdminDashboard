import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../get-api.service'

@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.component.html',
  styleUrls: ['./waiters.component.css']
})
export class WaitersComponent implements OnInit {

  constructor(public getApiService: GetApiService) { }
  msgTrue = false;
  waiterList: any;
  ngOnInit(): void {
    this.waiterList = this.getApiService.apiCallwaiters().subscribe(data => {
      this.waiterList = data;

    });
  }
  addWaiter(form){

    //mock the form data
    //const newFormData = {name: 'leon'};

    //Dynamic Data Form 
    console.log(form.value.name)

    const newFormData = {name: form.value.name};

    this.getApiService.addWaiter(newFormData).subscribe(data=>{
      console.log(data)
     this.msgTrue = true;

    })
  
    }
  }


