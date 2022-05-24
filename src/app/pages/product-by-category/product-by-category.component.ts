import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  products: any;
  product: any;
  id: any;
  data: any;
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
    this.dataService.getProduct(this.id).subscribe(res =>{
      console.log(res);
      this.data = res;
      this.product = this.data;
    })
  }

  deleteData(id: any){
    //console.log(id);
    this.dataService.deleteProduct(id).subscribe(res =>{
      this.getProductData();
    })
  }

}