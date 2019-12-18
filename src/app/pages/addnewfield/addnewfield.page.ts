import { Component, OnInit } from '@angular/core';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { AddNewFieldService } from 'src/app/services/addNewField/add-new-field.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { sports } from 'src/app/services/base';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Court } from 'src/app/models/court';


@Component({
  selector: 'app-addnewfield',
  templateUrl: './addnewfield.page.html',
  styleUrls: ['./addnewfield.page.scss'],
})
export class AddnewfieldPage implements OnInit {
  direction = faDirections;
  toast:any
  
  isProcessing: Boolean

  private selectedCourt: Court

  formData : FormGroup = new FormGroup({
    name: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    email: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    field_location: new FormControl(null,{
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
    phone_number: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    sport_id: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    fieldName: new FormControl(),
    court_id: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    date: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    price_per_person: new FormControl(1),
    start_time: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    end_time: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    desc: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    who_can_play: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    repeat_every_week: new FormControl(false,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    user_id: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
  })

  async createToast(message, color){
    this.toast=await this.toastCtrl.create({
      message: message,
      color: color,
      duration: 2000,
      position: "top",
    })
    this.toast.present()
  }

  constructor(private connectToApi: AddNewFieldService,
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

  submit(){
    if(this.formData.valid){
      this.isProcessing=true

        //form output conversion
      var temp = this.formData.value
      temp.repeat_every_week ? temp.repeat_every_week="yes" : temp.repeat_every_week="no"

      this.connectToApi.connectToApi(temp).subscribe(
        (response)=>{
          this.createToast("New event has been created successfully","success")
          this.isProcessing=false
          this.navCtrl.back()
        },(error)=>{
          this.createToast(error.message,"success")
        })
    }else{
      this.createToast("Please complete this form before continue","danger")
    }
  }

}