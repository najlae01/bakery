import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import {ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: any;
  categories:any;
  form!: FormGroup;
  files: any;
  data: any;
  dt: any;
  submitted: any = false;
  product = new Product();
    constructor(private toastr: ToastrService, private formBuilder: FormBuilder,
       private route: ActivatedRoute, private dataService: DataService) { }
  
    ngOnInit(): void {
      console.log(this.route.snapshot.params['id']);
      this.id = this.route.snapshot.params['id'];
      this.getData();
      this.createForm();
      this.getCategoryData();
    }
    getData(){
      this.dataService.getProduct(this.id).subscribe(res =>{
        console.log(res);
        this.data = res;
        this.product = this.data;
      })
    }
  
    updateProduct(){
      this.submitted = true;
      if(this.form.invalid){
        return;
      }
      const formData = new FormData();
      formData.append("productName", this.form.get('productName')?.value);
      formData.append("productDetails", this.form.get('productDetails')?.value);
      formData.append("productPrice", this.form.get('productPrice')?.value);
      formData.append("productImg", this.files, this.files.name);
      formData.append("category_id", this.form.get('category_id')?.value);
      console.log("Bonjour - Insertion test")
      this.dataService.updateProduct(this.id, formData).subscribe(res =>{
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
        this.form.get('productImg')?.reset();
        this.form.get('productName')?.reset();
        this.form.get('productDetails')?.reset();
        this.form.get('productPrice')?.reset();
        this.form.get('category_id')?.reset();
      })
    }

    
  getCategoryData(){
    console.log("Liste des catégories")
    this.dataService.listCategory().subscribe(res =>{
      console.log(res);
      this.categories = res;
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
      productName: [null, Validators.required],
      productDetails: [null, Validators.required],
      productPrice: [null, Validators.required],
      productImg: [null, Validators.required],
      category_id: [null, Validators.required]
      
    })
  }
}
