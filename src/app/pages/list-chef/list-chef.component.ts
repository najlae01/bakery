import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-chef',
  templateUrl: './list-chef.component.html',
  styleUrls: ['./list-chef.component.css']
})
export class ListChefComponent implements OnInit {

  chefs: any;
  dt: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/chefs/'
  constructor(private toastr: ToastrService, private dataservice: DataService) { }

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

  
  deleteData(id: any){
    //console.log(id);
    this.dataservice.deleteChef(id).subscribe(res =>{
      this.getChefData();
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
