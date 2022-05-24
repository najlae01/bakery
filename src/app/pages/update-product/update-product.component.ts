import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: any;
  data: any;
  product = new Product();
    constructor(private route: ActivatedRoute, private dataService: DataService) { }
  
    ngOnInit(): void {
      console.log(this.route.snapshot.params['id']);
      this.id = this.route.snapshot.params['id'];
      this.getData();
    }
    getData(){
      this.dataService.getProduct(this.id).subscribe(res =>{
        console.log(res);
        this.data = res;
        this.product = this.data;
      })
    }
  
    updateProduct(){
      this.dataService.updateProduct(this.id, this.product).subscribe(res =>{
        this.getData;
      })
    }
}
