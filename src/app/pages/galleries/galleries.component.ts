import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent implements OnInit {

  galleries: any;
  dt: any;
  imageDirectorypath: any = 'http://127.0.0.1:8000/storage/galleries/'
  selectedIndex = 0;
  @Input() indicators = true;
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getGalleryData();
  }

  getGalleryData(){
    console.log("Gallery list")
    this.dataservice.listGallery().subscribe(res =>{
      console.log(res);
      this.galleries = res;
    })
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
