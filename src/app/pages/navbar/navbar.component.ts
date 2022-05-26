import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private cartService: CartService, private dataService: DataService) { 
  }
  isAuth: boolean = false;
  public totalItem : number = 0;
  dt: any;

  ngOnInit(): void {
    this.user();
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  user(){
    if(localStorage.getItem("currentUser") != null){
      console.log(localStorage.getItem("currentUser"));
        this.isAuth = true;
    }
  }

  logout(){
    this.dataService.logout();
      this.router.navigate(['/login']);
      localStorage.getItem("currentUser");
  }

}
