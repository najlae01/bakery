import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  data: any;
  id: any;
  imageDirectorypathProducts: any = 'http://127.0.0.1:8000/storage/products/'
  product = new Product();
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getProductData();
  }
  getProductData(){
    this.dataService.getProduct(this.id).subscribe(res =>{
      console.log(res);
      this.data = res;
      this.product = this.data;
    })
  }
}
