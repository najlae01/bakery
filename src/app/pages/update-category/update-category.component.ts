import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id: any;
  categories:any;
  form!: FormGroup;
  files: any;
  data: any;
  dt: any;
  submitted: any = false;
  category = new Category(); 
  constructor(private route: ActivatedRoute, private toastr: ToastrService,
       private dataService: DataService, private formBuilder: FormBuilder) { }
  
    ngOnInit(): void {
      console.log(this.route.snapshot.params['id']);
      this.id = this.route.snapshot.params['id'];
      this.getData();
      this.createForm();
    }
    getData(){
      this.dataService.getCategory(this.id).subscribe(res =>{
        console.log(res);
        this.data = res;
        this.category = this.data;
      })
    }
  
    updateCategory(){
      this.submitted = true;
      if(this.form.invalid){
        return;
      }
      const formData = new FormData();
      formData.append("categoryName", this.form.get('categoryName')?.value);
      formData.append("categoryDetails", this.form.get('categoryDetails')?.value);
      formData.append("categoryImg", this.files, this.files.name);
      console.log("Bonjour - Insertion test")
      this.dataService.updateCategory(this.id, formData).subscribe(res =>{
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
        this.form.get('categoryImg')?.reset();
        this.form.get('categoryName')?.reset();
        this.form.get('categoryDetails')?.reset();
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
        categoryName: [null, Validators.required],
        categoryDetails: [null, Validators.required],
        categoryImg: [null, Validators.required]
      })
    }
}
