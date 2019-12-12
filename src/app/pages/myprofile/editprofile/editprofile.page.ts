import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditProfileService } from 'src/app/services/editProfile/edit-profile.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';

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
    private toastCtrl: ToastController
  ) { }

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

    var loading = await this.loadingCtrl.create({
      message: "Changing your profile details...",
    })
    loading.present()
    
    if(this.formData.valid){
      console.log(this.formData.value)
      this.editProfileSvc.updateCurrentProfile(this.userID,this.formData.value).subscribe(
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
      alert("Please fill this form")
    }
  }

}
