import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  isProcessing: Boolean
  mainRegister: FormGroup=new FormGroup({
    first_name: new FormControl(null,{
      updateOn: 'change',
      validators: [Validators.required]
    }),
    last_name:new FormControl(null,{
      updateOn: 'change',
      validators: [Validators.required]
    }),
    phone_number:new FormControl(null,{
      updateOn: 'change',
      validators: [Validators.required]
    }),
    email:new FormControl(null,{
      updateOn: 'change',
      validators: [Validators.required]
    }),
    password: new FormControl(null,{
      updateOn: 'change',
      validators: [Validators.required]
    }),
    confirmPass: new FormControl(null,{
      updateOn: 'change',
      validators: [Validators.required]
    }),
  })

  constructor(
    private toastController: ToastController,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isProcessing=false;
  }

  async submit(){
    if(this.mainRegister.valid){
      console.log(this.mainRegister.value)
      //password confirmation checker
      if(this.mainRegister.value.password != this.mainRegister.value.confirmPass){
        (await this.toastController.create({
          message: "Your password is not same, please check your password and try again",
          color:"danger",
          duration: 2000,
        })).present()
        return
      }else{
        this.isProcessing=true
        this.authService.makeNewAccount(this.mainRegister.value).subscribe(
          async f=>{
            this.isProcessing=false;
            (await this.toastController.create({
              message: "New account has been created",
              color:"success",
              duration: 2000,
            })).present()
            this.router.navigate(['/','login'])
          },
          async (err)=>{
            this.isProcessing=false;
            (await this.toastController.create({
              message: "This email has been used",
              color:"danger",
              duration: 2000,
            })).present()
          }
        )
      }
    }else{
      (await this.toastController.create({
        message: "Please check your forms, then try submitting again",
        color:"danger",
        duration: 2000,
      })).present()
    }
  }

}
