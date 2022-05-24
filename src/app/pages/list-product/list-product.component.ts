import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private data: DataService) { }
  products: any;
  product: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/products/'
  productData: any;
  ngOnInit(): void {
    //this.userId = this.data.getUser()
    this.productData = this.data.productData;
    this.getProductData();
  }

  getProductData(){
    console.log("Liste des produits")
    this.data.listProduct().subscribe(res =>{
      console.log(res);
      this.products = res;
    })
  }


  deleteData(id: any){
    //console.log(id);
    this.data.deleteProduct(id).subscribe(res =>{
      this.getProductData();
    })
  }
}
