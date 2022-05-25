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
  public isAuth: boolean = false;

  constructor(private toastr: ToastrService, private data: DataService) { 
    setTimeout(
      () => {
        this.isAuth = true;
      }
    )
  }
  //id: any;
  //role: any;
  courses: any;
  //redir: any;
  dt: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/categories/'
  imageDirectorypathProducts: any = 'http://127.0.0.1:8000/storage/products/'
  categories: any;
  products: any;

  ngOnInit(): void {
    this.courses = [];
    //this.redir = this.redirect();
    //this.userId = this.data.getUser()
    this.getCategoryData();
    this.getProductData();
  }

  getCategoryData(){
    console.log("Liste des catégories")
    this.data.listCategory().subscribe(res =>{
      //console.log(res);
      this.categories = res;
    })
  }

  getProductData(){
    console.log("Products list")
    this.data.listProduct().subscribe(res =>{
      //console.log(res);
      this.products = res;
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
