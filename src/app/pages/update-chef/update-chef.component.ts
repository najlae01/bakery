import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chef } from 'src/app/chef';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-chef',
  templateUrl: './update-chef.component.html',
  styleUrls: ['./update-chef.component.css']
})
export class UpdateChefComponent implements OnInit {

  id: any;
  form!: FormGroup;
  files: any;
  data: any;
  dt: any;
  submitted: any = false;
  chef = new Chef();
    constructor(private toastr: ToastrService, private formBuilder: FormBuilder,
       private route: ActivatedRoute, private dataService: DataService) { }
  
    ngOnInit(): void {
      console.log(this.route.snapshot.params['id']);
      this.id = this.route.snapshot.params['id'];
      this.getData();
      this.createForm();
    }
    getData(){
      this.dataService.getChef(this.id).subscribe(res =>{
        console.log(res);
        this.data = res;
        this.chef = this.data;
      })
    }
  
    updateChef(){
      this.submitted = true;
      if(this.form.invalid){
        return;
      }
      const formData = new FormData();
      formData.append("ChefName", this.form.get('ChefName')?.value);
      formData.append("ChefDetails", this.form.get('ChefDetails')?.value);
      formData.append("ChefRole", this.form.get('ChefRole')?.value);
      formData.append("ChefImg", this.files, this.files.name);
      console.log("Bonjour - Insertion test")
      this.dataService.updateChef(this.id, formData).subscribe(res =>{
        console.log(res);
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
        this.submitted = false;
        this.form.get('ChefImg')?.reset();
        this.form.get('ChefName')?.reset();
        this.form.get('ChefDetails')?.reset();
        this.form.get('ChefRole')?.reset();
      })
    }

    get f(){
      return this.form.controls;
    }
  

  uploadImage(event: any){
    this.files = event.target.files[0];
    console.log(this.files);
  }

  createForm(){
    this.form = this.formBuilder.group({
      ChefName: [null, Validators.required],
      ChefDetails: [null, Validators.required],
      ChefRole: [null, Validators.required],
      ChefImg: [null, Validators.required]
    })
  }
}
