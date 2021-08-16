import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.component.html',
  styleUrls: ['./waiters.component.css'],
})
export class WaitersComponent implements OnInit {
  closeResult: string;
  waiters: any;
  shops: any;


  isSubmited: boolean;

  formTemplate = new FormGroup({
    name: new FormControl('', Validators.required),
    shop_id: new FormControl('', Validators.required),
  });

  constructor(
    private modalService: NgbModal,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.resetForm();
    this.dataService.apiCallwaiters().subscribe((response: any) => {
      this.waiters = response;
    });

    this.dataService.apiCallShops().subscribe((response: any) => {
      this.shops = response;
    });
  }

  onSubmitWaiter(formValue){
    this.dataService.addWaiter(formValue); 
  }


  get formControl() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      name: '',
      shop_id: 1
    });
    this.isSubmited = false;

  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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
}
