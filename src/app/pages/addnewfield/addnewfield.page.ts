import { Component, OnInit } from '@angular/core';
import { faDirections } from '@fortawesome/free-solid-svg-icons'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { sportDetails, sports } from 'src/app/services/base';
import { AuthService } from 'src/app/services/auth/auth.service';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addnewfield',
  templateUrl: './addnewfield.page.html',
  styleUrls: ['./addnewfield.page.scss'],
})
export class AddnewfieldPage implements OnInit {
  direction = faDirections;
  constructor(
    private authSvc: AuthService,
    private toastCtrl: ToastController
  ) { }

  photo: any
  isLoading: any

  placeholder = "assets/images/placeholder/generic.jpg"

  formData=new FormGroup({
    name: new FormControl(null,{
      updateOn: 'change',
      validators: [Validators.required]
    }),
    user_id:  new FormControl(this.authSvc.getLoggedInUserID(),{
      updateOn: "change",
      validators: [Validators.required]
    }),
    sport_id:  new FormControl(1,{
      updateOn: "change",
      validators: [Validators.required]
    }),
    phone_number:  new FormControl(null,{
      updateOn: "change",
      validators: [Validators.required]
    }),
    email: new FormControl(null,{
      updateOn: "change",
      validators: [Validators.required, Validators.email]
    }),
    weekday_price:  new FormControl(null,{
      updateOn: "change",
      validators: [Validators.required]
    }),
    weekend_price:  new FormControl(null,{
      updateOn: "change",
      validators: [Validators.required]
    }),
    location:  new FormControl(null,{
      updateOn: "change",
      validators: [Validators.required]
    }),
  })

  ngOnInit() {
    this.photo=this.placeholder
  }

  toast: any

  async createToast(message, color){
    this.toast=await this.toastCtrl.create({
      message: message,
      color: color,
      duration: 2000,
      position: "top",
    })
    this.toast.present()
  }

  select(e){
    this.formData.get('sport_id').setValue(sports[e])
  }

  async takeAPicture(){
    try{
      const image = await Plugins.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      this.photo=`data:image/${image.format};base64,`+image.base64String
    }catch(error){
        if(error == "Permission dismissed"){
          this.createToast("No permission is set","primary")
        }
        else if(error == "Permission denied"){
          this.createToast("Please allow camera permission and try again","primary")

        }else if(error == "User cancelled photos app"){
          this.createToast("Operation cancelled","primary")

        }else{
          this.createToast("An unknown error occured","primary")
        }
    }
  }

  resetPicture(){
    this.photo=this.placeholder
  }

  submit(){
    if(this.formData.valid && this.photo != this.placeholder){
      console.log(this.formData.value)
    }else{
      if(this.formData.get('email').hasError('required') || this.formData.get('email').hasError('email')) this.createToast("Please check your email formats!","danger")
      else if(this.photo == this.placeholder) this.createToast("Please upload a picture of your court!","danger")
      else this.createToast("Please complete all forms before continue","danger")
    }
  }

}
