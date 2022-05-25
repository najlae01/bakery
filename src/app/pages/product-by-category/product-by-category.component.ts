import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private dataService: DataService) { }
  products: any;
  id: any;
  data: any;
  dt: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/products/'
  productData: any;
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    //this.userId = this.data.getUser()
    this.getProductData();
  }

  getProductData(){
    console.log("Liste des produits")
    this.dataService.products(this.id).subscribe(res =>{
      console.log(res);
      this.data = res;
      this.products = this.data;
    })
  }

  deleteData(id: any){
    //console.log(id);
    this.dataService.deleteProduct(id).subscribe(res =>{
      this.getProductData();
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
    })
  }

}