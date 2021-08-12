import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { Menu } from '../../../app/models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  closeResult:string;
  menus: any;

  constructor(private modalService:NgbModal,
    private dataService :DataService) { }

  ngOnInit(): void {
    this.dataService.apiCallMenus().subscribe((response: any) => {
      this.menus =  response;
      console.log("Menu Items " + response);

   });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  deleteMenu(isComplete: any, index: any){
    if (isComplete){
      const toDelete = confirm(`Do you want to delete this ${this.menus[index].name}?`);

      if (toDelete){
        this.menus.splice(index, 1);
      }
    }
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



