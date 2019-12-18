import { Component, OnInit } from '@angular/core';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { AddNewFieldService } from 'src/app/services/addNewField/add-new-field.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Court } from 'src/app/models/court';
import { sports } from 'src/app/services/base';
import { SelectFieldComponent } from '../addnewevent/select-field/select-field.component';


@Component({
  selector: 'app-addnewfield',
  templateUrl: './addnewfield.page.html',
  styleUrls: ['./addnewfield.page.scss'],
})
export class AddnewfieldPage implements OnInit {
  direction = faDirections;
  toast:any
  
  isProcessing: Boolean

  formData : FormGroup = new FormGroup({
    name: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    user_id: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    sport_id: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    email: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    weekday_price: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    weekend_price: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    location: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    phone_number: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
  })

  sendData(){
   var body = {
      name: this.formData.get('name').value,
      user_id: this.authSvc.getLoggedInUserID(),
      sport_id: this.formData.get('sport_id').value,
      email: this.formData.get('email').value,
      weekday_price: this.formData.get('weekday_price').value,
      weekend_price: this.formData.get('weekend_price').value,
      location: this.formData.get('location').value,
      phone_number: this.formData.get('phone_number').value
   }
    console.log(this.formData)
      this.addNewField.connectToApi(this.formData).subscribe(
        (nxt) =>{
          console.log(nxt)
        }
      )
  }

  


  constructor(private addNewField: AddNewFieldService,
    private navCtrl: NavController,
    private authSvc: AuthService,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    
  }

  select(e){
    this.formData.get("sport_id").setValue(sports[e])
    console.log(this.formData.value)
  }
  

}