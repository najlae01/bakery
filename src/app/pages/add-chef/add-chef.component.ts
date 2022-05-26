import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Chef } from 'src/app/chef';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {

  form!: FormGroup;
  files: any;
  dt: any;
  submitted: any = false;
  chef = new Chef(); 

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
    formData.append("chefName", this.form.get('chefName')?.value);
    formData.append("chefDetails", this.form.get('chefDetails')?.value);
    formData.append("chefRole", this.form.get('chefRole')?.value);
    formData.append("chefImg", this.files, this.files.name);
    console.log("Bonjour - Insertion test")
    this.data.addChef(formData).subscribe(res =>{
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
      this.form.get('chefImg')?.reset();
      this.form.get('chefName')?.reset();
      this.form.get('chefDetails')?.reset();
      this.form.get('chefRole')?.reset();
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
      chefName: [null, Validators.required],
      chefDetails: [null, Validators.required],
      chefRole: [null, Validators.required],
      chefImg: [null, Validators.required],
    })
  }

}