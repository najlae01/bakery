import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  chefs: any;
  dt: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/chefs/'
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getChefData();
  }

  getChefData(){
    console.log("Chefs list")
    this.dataservice.listChef().subscribe(res =>{
      console.log(res);
      this.chefs = res;
    })
  }
}