import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: any;
  dt: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/products/'
  constructor(private toastr: ToastrService, private dataservice: DataService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    console.log("Products list")
    this.dataservice.listProduct().subscribe(res =>{
      console.log(res);
      this.products = res;
    })
  }

  
  deleteData(id: any){
    //console.log(id);
    this.dataservice.deleteProduct(id).subscribe(res =>{
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
