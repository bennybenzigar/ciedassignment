import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // email:any=''
  // password:any=''
  // btnDisabled:boolean=true
  loginData: any
  loginForm!: FormGroup
  constructor(private dataService: DataService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],

      password: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue]
    })

    this.getLoginDetails()
    this.getFlag()
  }
  getFlag() {
    this.dataService.getFlags()
      .pipe(map((res: any) => {
        let data:any = []
        for (let item of res) {
         let d={ name:item.altSpellings[0],
            flags:item.flags.png}
         data.push(d)

        }
        return data
      }))
      .subscribe((res: any) => {
        console.log(res)
      })
  }
  getLoginDetails() {
    this.dataService.loginData$.subscribe((res: any) => {
      this.loginData = res
    })
    console.log(this.loginData, 'll')
  }
  login() {

    if (this.loginForm.valid) {

      if (this.loginForm.value.email == this.loginData.email) {

        if (this.loginForm.value.password == this.loginData.password) {
          this.dataService.authenticated = true
          this.router.navigateByUrl('dashboard')


        }
        else {
          alert('please check your password')
        }
      }
      else {
        alert('please check your email')

      }
    }
    else {
      alert('invalid form')
    }
  }

}