import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cuisine } from 'src/app/models/cuisine';
import { DataService } from 'src/app/services/data.service';
import { Menu } from '../../../app/models/menu';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css'],
})
export class CuisinesComponent implements OnInit {
  closeResult: string;
  menu: Menu = new Menu();
  cuisine: Cuisine = new Cuisine();
  menus: any;
  shops: any;
  cuisines: any;
  imgSrc:string = "/assets/img/dif.jpg"
  selectedImage:any = null;
  isSubmited:boolean = false;

  formTemplate = new FormGroup({
    foodType: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    menu_id: new FormControl('',Validators.required),
  });

  constructor(
    private modalService: NgbModal,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // this.resetForm();
    this.dataService.apiCallMenus().subscribe((response: any) => {
      this.menus = response;
    });

    this.dataService.apiCallCuisines().subscribe((response: any) => {
      this.cuisines = response;
    });

    this.dataService.apiCallShops().subscribe((response: any) => {
      this.shops = response;
      console.log(this.shops);
    });
  }

  showPreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }else{
      this.imgSrc = "/assets/img/dif.jpg";
      this.selectedImage = null;
    }
  }

  onSubmit(formValue){
    this.isSubmited = true;
  }

  get formContols(){
    return this.formTemplate['controls'];
  }

  // resetForm(form?: NgForm) {
  //   if (form != null) form.reset();
  //   this.menu = {
  //     name: '',
  //     description: '',
  //     shop_id: null,
  //   };
  // }

  // saveMenuCategury(name: string, description: string, shop_id: number) {
  //   this.dataService.createMenuItem(name, description, shop_id);
  //   // console.log(name,description,shop_id);
  // }

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

  deleteMenu(isComplete: any, index: any) {
    if (isComplete) {
      const toDelete = confirm(
        `Do you want to delete this ${this.menus[index].name}?`
      );

      if (toDelete) {
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
