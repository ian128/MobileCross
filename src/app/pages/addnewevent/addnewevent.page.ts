import { Component, OnInit } from '@angular/core';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { AddNewEventService } from 'src/app/services/addNewEvent/add-new-event.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { sports } from 'src/app/services/base';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SelectFieldComponent } from './select-field/select-field.component';
import { Court } from 'src/app/models/court';

@Component({
  selector: 'app-addnewevent',
  templateUrl: './addnewevent.page.html',
  styleUrls: ['./addnewevent.page.scss'],
})
export class AddneweventPage implements OnInit {
  direction = faDirections;
  toast:any

  minDate= new Date().toISOString()
  maxDate= (new Date()).getFullYear()+3

  isProcessing: Boolean

  private selectedCourt: Court

  formData : FormGroup = new FormGroup({
    name: new FormControl(null,{
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

  
  constructor(
    private connectToApi: AddNewEventService,
    private navCtrl: NavController,
    private authSvc: AuthService,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.isProcessing=false
    this.formData.get("user_id").setValue(this.authSvc.getLoggedInUserID())

    this.formData.get('date').valueChanges.subscribe(
      (res)=>{
        if(this.selectedCourt == null) return
        var eventDate = new Date(res)
        if(eventDate.getDay() == 5 || eventDate.getDay() == 6){
          this.formData.get('price_per_person').setValue(this.selectedCourt.weekend_price)
        }else{
          this.formData.get('price_per_person').setValue(this.selectedCourt.weekday_price)
        }
      }
    )

  }

  select(e){
    this.formData.get("sport_id").setValue(sports[e])
    console.log(this.formData.value)
  }

  async selectField(){
    var x = await this.modalCtrl.create({
      component: SelectFieldComponent,
      componentProps:{
        sport_id: this.formData.value.sport_id
      }
    },)
    x.present()

    x.onDidDismiss().then((res: any)=>{
      console.log(res)
      if(!res.data.canceled){
        var court : Court = res.data.court
        var eventDate = new Date(this.formData.get('date').value)
        if(eventDate.getDay() == 5 || eventDate.getDay() == 6){
          this.formData.get('price_per_person').setValue(court.weekend_price)
        }else{
          this.formData.get('price_per_person').setValue(court.weekday_price)
        }
        this.formData.get('fieldName').setValue(court.name)
        this.formData.get('court_id').setValue(court.id)
        this.selectedCourt=court
      }
    })
  }

  changeDate(){
    console.log('changedate')
  }
  
  submit(){
    if(this.formData.valid){
      this.isProcessing=true

        //form output conversion
      var temp = this.formData.value
      temp.repeat_every_week ? temp.repeat_every_week="yes" : temp.repeat_every_week="no"

      var startTime = new Date(this.formData.get('start_time').value)
      var endTime = new Date(this.formData.get('end_time').value)
      
      if(startTime.getTime()-endTime.getTime() > 0) {
        this.createToast("Invalid start time and end time range","danger")
        this.isProcessing=false
        return
      }

      temp.start_time=(
        startTime.getHours().toString().padStart(2,'0')+':'+
        startTime.getMinutes().toString().padStart(2,'0')+':'+'00'
      )

      temp.end_time=(
        endTime.getHours().toString().padStart(2,'0')+':'+
        endTime.getMinutes().toString().padStart(2,'0')+':'+'00'
      )

      var eventDate = new Date(this.formData.get('date').value)
      if(eventDate.getTime() - new Date().getTime() < 0) {
        this.createToast("Event date cannot be same as today!","danger")
        this.isProcessing=false
        return
      }

      temp.date=(
        eventDate.getFullYear().toString()+'-'+
        (eventDate.getMonth()+1).toString().padStart(2,'0')+'-'+
        eventDate.getDate().toString().padStart(2,'0')
      )
      console.log(temp)

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
