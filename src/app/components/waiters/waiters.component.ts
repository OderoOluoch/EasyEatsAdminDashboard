import { Component, OnInit, ɵbypassSanitizationTrustHtml } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.component.html',
  styleUrls: ['./waiters.component.css']
})
export class WaitersComponent implements OnInit {
  closeResult:string;
  waiters:any;

  constructor(
    private modalService:NgbModal,
    private dataService:DataService) { }

    msgTrue =false;

  ngOnInit(): void {
    this.dataService.apiCallwaiters().subscribe((response: any) => {
      this.waiters =  response;
   });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

     //mocking the form data
     const newFormData = {id : 2, name : "sarah" , shop_id : 0}
     //dynamic data from form
         console.log(content.value.name)
         console.log(content.value.id)
         console.log(content.value.shop_id)
     
         this.dataService.createWaiters(newFormData).subscribe(data => {
         console.log(data);
           this.msgTrue= true;
     
         });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

//   addNewWaiter(form){

//     //mocking the form data
//     const newFormData = {id : 2, name : "sarah" , shop_id : 0}
// //dynamic data from form
//     console.log(form.value.name)
//     console.log(form.value.id)
//     console.log(form.value.shop_id)

//     this.dataService.createWaiters(newFormData).subscribe(data => {
//     console.log(data);
//       this.msgTrue= true;

//     });


  // }

}

