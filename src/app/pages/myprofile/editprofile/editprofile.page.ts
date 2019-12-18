import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditProfileService } from 'src/app/services/editProfile/edit-profile.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { AngularFireDatabase } from '@angular/fire/database';

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
    }),
  })

  userID: any

  constructor(
    private editProfileSvc: EditProfileService,
    private authSvc: AuthService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private sanitizer: DomSanitizer,
    private router: Router,
    private db: AngularFireDatabase
  ) { }

  picture: any
    currentProfile: Profile

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
    this.userID = this.authSvc.getLoggedInUserID()

    let profile: Profile = this.router.getCurrentNavigation().extras.state.profile
    this.formData.patchValue(profile)

    this.currentProfile=profile

    var re = this.db.database.ref('/raga/profile/p'+this.userID).on(
      'value',(snapshot)=>{
        if(snapshot.val() != null) this.picture=snapshot.val()
        else this.picture = "assets/icon/profile.png"
      },
    )

  }

  async submit(){
    if(this.formData.valid){
      var loading = await this.loadingCtrl.create({
        message: "Changing your profile details...",
      })
      loading.present()

      this.editProfileSvc.updateCurrentProfile(this.userID,this.formData.value).subscribe(
        async response=>{
        
          await this.db.database.ref('/raga/profile/p'+this.userID).set(this.picture)

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
          console.log(error)
          this.createToast("This email has been used!", "danger")
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
        resultType: CameraResultType.Base64,
      });
      this.picture = `data:image/${image.format};base64,`+image.base64String
      
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
