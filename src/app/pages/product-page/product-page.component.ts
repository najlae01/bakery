import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private dataservice: DataService) { }
  getMealId: any;
  menuData: any;
  ngOnInit(): void {
    this.getMealId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMealId, 'getmenu>>>');
    if(this.getMealId)
    {
        this.menuData =  this.dataservice.productData.filter((value)=>{
            return value.id == this.getMealId;
        });
        console.log(this.menuData, 'menudata>>>');
    }
  }
}
