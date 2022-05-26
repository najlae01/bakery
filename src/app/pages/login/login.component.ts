import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { NgToastService} from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  user = new User();
  dt: any;
  constructor(private router: Router, private formBuilder: FormBuilder, private dataService: DataService, private toast: NgToastService) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email : [''],
      password : [''],
    })
  }


  login(){
    this.user.email = this.form.get('email')?.value;
    this.user.password = this.form.get('password')?.value;
    this.dataService.login(this.user).subscribe(res=>{
      this.dt = res;
      localStorage.setItem("currentUser", this.dt);
      console.log(res);
      if(this.dt.status_code == 200){
        this.toast.success({detail:"Success Message", summary:this.dt.message, duration: 4000});
        this.form.reset();
        if (this.dt.isAdmin == 1){
          this.router.navigate(['dashboard']);
        }else{
          this.router.navigate(['']);
        }
      }else{
        this.toast.error({detail:"Error Message", summary:"Login Failed, Try Again !", duration: 4000});
      }
        
    }
    )
  }
}
