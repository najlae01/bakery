import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Gallery } from 'src/app/gallery';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-gallery',
  templateUrl: './add-gallery.component.html',
  styleUrls: ['./add-gallery.component.css']
})
export class AddGalleryComponent implements OnInit {

  form!: FormGroup;
  files: any;
  dt: any;
  submitted: any = false;
  gallery = new Gallery(); 

  constructor(private toastr: ToastrService, private data: DataService, private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.createForm();
  }

  insertData(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    const formData = new FormData();
    formData.append("galleryName", this.form.get('galleryName')?.value);
    formData.append("galleryDetails", this.form.get('galleryDetails')?.value);
    formData.append("galleryRole", this.form.get('galleryRole')?.value);
    formData.append("galleryImg", this.files, this.files.name);
    console.log("Bonjour - Insertion test")
    this.data.addGallery(formData).subscribe(res =>{
      console.log(res);
      this.dt = res;
      if(this.dt.status = true){
        this.toastr.success(JSON.stringify(this.dt.message), '', {
          timeOut: 2000,
          progressBar: true
        })
      }else{
        this.toastr.error(JSON.stringify(this.dt.message), '', {
          timeOut: 2000,
          progressBar: true
        })
      }
      this.submitted = false;
      this.form.get('galleryImg')?.reset();
    })
  }
  get f(){
    return this.form.controls;
  }

  uploadImage(event: any){
    this.files = event.target.files[0];
    console.log(this.files);
  }

  createForm(){
    this.form = this.formBuilder.group({
      galleryImg: [null, Validators.required],
    })
  }

}
