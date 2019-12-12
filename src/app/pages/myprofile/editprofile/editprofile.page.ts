import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditProfileService } from 'src/app/services/editProfile/edit-profile.service';
import { AuthService } from 'src/app/services/auth/auth.service';

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
    private authSvc: AuthService
  ) { }

  ngOnInit() {
    this.userID = this.authSvc.getLoggedInUserID()
    this.editProfileSvc.retrieveCurrentProfile(this.userID).subscribe(
      (response)=>{
        this.formData.patchValue(response)
      }
    )
  }

  submit(){
    if(this.formData.valid){
      console.log(this.formData.value)
      this.editProfileSvc.updateCurrentProfile(this.userID,this.formData.value).subscribe(
        response=>{
          alert("success bang")
        }
      )
    }else{
      alert("Please fill this form")
    }
  }

}
