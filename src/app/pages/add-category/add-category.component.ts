import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private data: DataService) { }
  category = new Category();
  ngOnInit(): void {
  }

  insertData(){
    console.log("Bonjour - Insertion test")
    this.data.addCategory(this.category).subscribe(res =>{
      //console.log(res);
    })
  }
}
