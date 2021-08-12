import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(
    private modalService: NgbModal,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.apiCallwaiters().subscribe((response: any) => {
      this.waiters = response;
    });

    this.dataService.apiCallShops().subscribe((response: any) => {
      this.shops = response;
    });
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
