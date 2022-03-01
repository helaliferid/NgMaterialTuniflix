import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import {ActivatedRoute,Router} from '@angular/router'

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

  constructor(
    private fb: FormBuilder,
    private userService:UserService, 
    private snackBar:MatSnackBar,
    private router:Router,
    private route$:ActivatedRoute) {}

  onSubmit(): void {
    this.userService.registerUser(this.registerForm.value).subscribe({
      next:(res)=>{
        if(res.status==="success"){
          this.snackBar.open(res.message,"close");
          this.route$.url.subscribe( value =>
            this.router.navigate(['movies'])
          );
        }else if (res.status==="fail"){
          this.snackBar.open(res.message,"close")
        }
      },
      error:(error)=>{
        this.snackBar.open(error.message,"close")
      },
      complete:()=>{}
    })
  }
}
