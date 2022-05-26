import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  dt: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/categories/'
  categories: any;
  products: any;
  constructor(private toastr: ToastrService, private data: DataService) { }

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

  deleteData(id: any){
    //console.log(id);
    this.data.deleteCategory(id).subscribe(res =>{
      this.getCategoryData();
      this.dt = res;
      if(this.dt.status = true){
        this.toastr.success(JSON.stringify(this.dt.message), '', {
          timeOut: 2000,
          progressBar: true
        })
      }else{
        this.toastr.error(JSON.stringify(this.dt.message), '', {
          timeOut: 2000,
          progressBar: true
        })
      }
    })
  }

}
