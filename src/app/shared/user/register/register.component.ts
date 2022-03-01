import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullusername:['',Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,private userService:UserService, private snackBar:MatSnackBar) {}

  onSubmit(): void {
    this.userService.registerUser(this.registerForm.value).subscribe({
      next:(res)=>{
        this.snackBar.open(res.message,"close")
      },
      error:(error)=>{
        
      },
      complete:()=>{}
    })
  }
}
