import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditProfileService } from 'src/app/services/editProfile/edit-profile.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';


const { Camera } = Plugins;

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  formData : FormGroup = new FormGroup({
    first_name: new FormControl(null,{
      updateOn: "change",
      validators: [Validators.required]
    }),
    last_name: new FormControl(null,{
      updateOn: "change",
      validators: [Validators.required]
    }),
    phone_number: new FormControl(null,{
      updateOn: "change",
      validators: [Validators.required]
    }),
    email: new FormControl(null,{
      updateOn: "change",
      validators: [Validators.required]
    })
  })

  userID: any

  constructor(
    private editProfileSvc: EditProfileService,
    private authSvc: AuthService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private sanitizer: DomSanitizer
  ) { }

  picture: any
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

  async ngOnInit() {

    var loading = await this.loadingCtrl.create({
      message: "Fetching profile details ...",
    })
    loading.present()
    
    this.userID = this.authSvc.getLoggedInUserID()
    this.editProfileSvc.retrieveCurrentProfile(this.userID).subscribe(
      (response)=>{
        loading.dismiss()
        this.formData.patchValue(response)
      },
      async (err)=>{
        loading.dismiss()
      }
    )
  }

  async submit(){
    if(this.formData.valid){
      var loading = await this.loadingCtrl.create({
        message: "Changing your profile details...",
      })
      loading.present()

      let send = new FormData()
      for(let key in this.formData.value){
        send.append(key, this.formData.value[key])
        console.log(send)
      }
      if(this.picture != null) send.append('photo_profile', this.picture)

      send.forEach((k,v)=>{
        console.log(k+' - '+v)
      })

      this.editProfileSvc.updateCurrentProfile(this.userID, send).subscribe(
        async response=>{
          var successToast = await this.toastCtrl.create({
            message: "Profile has been updated successfully. It may take sometimes to be updated in my profile",
            color: "success",
            duration: 2000
          })

          successToast.present()

          loading.dismiss()
          this.navCtrl.back()
        },
        error=>{
          loading.dismiss()
        }
      )
    }else{
      this.toastCtrl.create({
        message: "Please complete the form to continue..",
        color: "danger",
        duration: 2000
      }).then(
        (res)=>{
          res.present()
        }
      )
    }
  }

  async takePhoto(){
    try{
      const image = await Plugins.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });

      this.picture = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
      alert(this.picture)
      this.picture = image.webPath
      
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

}
