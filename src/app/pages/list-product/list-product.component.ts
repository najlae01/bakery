import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/products/'
  constructor(private dataservice: DataService) { }

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
    })
  }

}
