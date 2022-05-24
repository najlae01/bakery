import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id: any;
  data: any;
  category = new Category();
    constructor(private route: ActivatedRoute, private dataService: DataService) { }
  
    ngOnInit(): void {
      console.log(this.route.snapshot.params['id']);
      this.id = this.route.snapshot.params['id'];
      this.getData();
    }
    getData(){
      this.dataService.getCategory(this.id).subscribe(res =>{
        console.log(res);
        this.data = res;
        this.category = this.data;
      })
    }
  
    updateCategory(){
      this.dataService.updateCategory(this.id, this.category).subscribe(res =>{
        this.getData;
      })
    }
}
