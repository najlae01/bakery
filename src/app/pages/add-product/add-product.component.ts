import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
  }

  insertData(){
    console.log("Bonjour - Insertion test")
    this.data.addProduct(this.product).subscribe(res =>{
      //console.log(res);
    })
  }

}
