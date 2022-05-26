import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  dt: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/categories/'
  categories: any;
  products: any;
  constructor( private data: DataService) { }

  ngOnInit(): void {
    this.getCategoryData();
  }

  getCategoryData(){
    console.log("Liste des catégories")
    this.data.listCategory().subscribe(res =>{
      //console.log(res);
      this.categories = res;
    })
  }

}
