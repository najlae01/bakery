import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( private data: DataService) { 
  }
  //id: any;
  //role: any;
  courses: any;
  //redir: any;
  isAuth: boolean = false;
  dt: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/categories/'
  imageDirectorypathProducts: any = 'http://127.0.0.1:8000/storage/products/'
  categories: any;
  products: any;

  ngOnInit(): void {
    //this.redir = this.redirect();
    //this.userId = this.data.getUser()
    this.user();
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
  user(){
    this.data.user().subscribe(res=>{
      this.dt = res;
      console.log(res);
      if(this.dt.status_code == 200){
        this.isAuth = true;
      }
    })
  }

}
