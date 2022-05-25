import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {ToastrService } from 'ngx-toastr';
import { User } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService, private data: DataService) { }
 //userId: any;
  user: any;
  courses: any;
  redir: any;
  dt: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/categories/'
  categories: any;
  productData: any;

  ngOnInit(): void {
    this.courses = [];
    this.redir = this.redirect();
    //this.userId = this.data.getUser()
    this.productData = this.data.productData;
    this.getCategoryData();
  }

  getCategoryData(){
    console.log("Liste des catégories")
    this.data.listCategory().subscribe(res =>{
      console.log(res);
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

  redirect(){
    this.data.user().subscribe(res =>{
      console.log(res);
      this.user = res;
      if (this.user.is_Admin == 1){
        return false;
      }else{
        return true;
      }
    })
  }

}
