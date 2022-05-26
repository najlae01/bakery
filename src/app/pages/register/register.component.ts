import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/user';
import { NgToastService} from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  user = new User();
  dt: any;
  userRole = new User();
  constructor(private router: Router, private formBuilder: FormBuilder, private dataService: DataService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : [''],
      email : [''],
      password : [''],
    })
  }

  register(){
    this.user.name = this.form.get('name')?.value;
    this.user.email = this.form.get('email')?.value;
    this.user.password = this.form.get('password')?.value;
    this.dataService.register(this.user).subscribe(res=>{
      this.dt = res;
      console.log(res);
      if(this.dt.status_code == 200){
        this.toast.success({detail:"Success Message", summary:this.dt.message, duration: 4000});
        this.form.reset();
        this.router.navigate(['']);
      }else
        this.toast.error({detail:"Error Message", summary:this.dt.message, duration: 4000});
    }
    )
  }
}
