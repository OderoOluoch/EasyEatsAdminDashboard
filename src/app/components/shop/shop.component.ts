import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { DataService } from 'src/app/services/data.service';
import { Menu } from '../../../app/models/menu';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})

export class ShopComponent implements OnInit {
  closeResult: string;
  menus: any;
  shops: any;
  
  imgSrc: string;
  selectedImage: any;
  isSubmited: boolean;

  formTemplate = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    tagline: new FormControl('', Validators.required)
  });


  constructor(
    private modalService: NgbModal,
    private storage: AngularFireStorage,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }


  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = '/assets/img/dif.jpg';
      this.selectedImage = null;
    }
  }


  registerOutlet(formValue) {
    this.isSubmited = true;
    if (this.formTemplate.valid) {
      var filePath = `shopoutlets/${this.selectedImage.name
        .split('.')
        .slice(0, -1)
        .join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage
        .upload(filePath, this.selectedImage)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              formValue['image'] = url;
              this.dataService.addCuisine(formValue);
              console.log("What is inside this form "+formValue['image'])
            });
          })
        )
        .subscribe();
        console.log("What is inside this form B"+formValue)
    }
  }


  get formControl() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      name: '',
      image: '',
      tagline: null,
    });
    this.imgSrc = '/assets/img/dif.jpg';
    this.isSubmited = false;
    this.selectedImage = null;
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
