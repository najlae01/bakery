import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-gallery',
  templateUrl: './list-gallery.component.html',
  styleUrls: ['./list-gallery.component.css']
})
export class ListGalleryComponent implements OnInit {

  galleries: any;
  dt: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/galleries/'
  constructor(private toastr: ToastrService, private dataservice: DataService) { }

  ngOnInit(): void {
    this.getGalleryData();
  }

  getGalleryData(){
    console.log("galleries list")
    this.dataservice.listGallery().subscribe(res =>{
      console.log(res);
      this.galleries = res;
    })
  }

  
  deleteData(id: any){
    //console.log(id);
    this.dataservice.deleteGallery(id).subscribe(res =>{
      this.getGalleryData();
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
