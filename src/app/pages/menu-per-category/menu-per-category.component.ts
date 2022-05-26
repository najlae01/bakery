import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu-per-category',
  templateUrl: './menu-per-category.component.html',
  styleUrls: ['./menu-per-category.component.css']
})
export class MenuPerCategoryComponent implements OnInit {

  constructor( private route: ActivatedRoute, private dataService: DataService) { }
  products: any;
  id: any;
  data: any;
  dt: any;
  category = new Category();
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/products/'
  productData: any;
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getProductData();
    this.getCategory();
  }
  getCategory(){
    this.dataService.getCategory(this.id).subscribe(res =>{
      console.log(res);
      this.data = res;
      this.category = this.data;
    })
  }

  getProductData(){
    console.log("Liste des produits")
    this.dataService.products(this.id).subscribe(res =>{
      console.log(res);
      this.data = res;
      this.products = this.data;
    })
  }


}
