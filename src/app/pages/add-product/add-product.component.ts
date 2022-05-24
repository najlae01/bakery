import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private data: DataService) { }
  product = new Product();
  id: any;
  categories:any;
  ngOnInit(): void {
   this.getCategoryData();
  }

  insertData(){
    console.log("Bonjour - Insertion test")
    this.data.addProduct(this.product).subscribe(res =>{
      //console.log(res);
    })
  }

  getCategoryData(){
    console.log("Liste des catégories")
    this.data.listCategory().subscribe(res =>{
      console.log(res);
      this.categories = res;
    })
  }

}
