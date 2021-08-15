import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { Menu } from '../../../app/models/menu';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {
  closeResult:string;
  menu:Menu = new Menu;
  menus: any;
  shops:any;
  cuisines:any;

  constructor(private modalService:NgbModal,
    private dataService :DataService) { }

  ngOnInit(): void {
    this.resetForm();
    this.dataService.apiCallMenus().subscribe((response: any) => {
      this.menus =  response;
   });

   this.dataService.apiCallCuisines().subscribe((response: any) => {
    this.cuisines =  response;
 });

   

   this.dataService.apiCallShops().subscribe((response:any) =>{
     this.shops = response;
     console.log(this.shops)
   } )
  }


  resetForm(form? :NgForm){
    if(form != null )
    form.reset();
    this.menu = {
      name:'',
      description: '',
      shop_id:null,
    }
  }

  saveMenuCategury(name:string,description:string,shop_id:number){
    this.dataService.createMenuItem(name,description,shop_id)
    // console.log(name,description,shop_id);
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



