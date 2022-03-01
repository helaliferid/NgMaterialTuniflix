import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticateService } from '../authenticate.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent  {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authenticationService:AuthenticateService, 
    private snackBar:MatSnackBar,
    private router:Router,
    private route$:ActivatedRoute) {}

  onSubmit(): void {
    this.authenticationService.login(this.loginForm.value.email,this.loginForm.value.password)
    .pipe(first())
    .subscribe({
      next:(res)=>{
        this.router.navigate(['movies']);
        this.snackBar.open("Logged in Successufully",'Close')
      },
      error:(error)=>{
        this.snackBar.open('Failed to login',"close")
      },
      complete:()=>{}
    })
  }

}
