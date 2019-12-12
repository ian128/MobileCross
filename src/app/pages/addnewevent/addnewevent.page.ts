import { Component, OnInit } from '@angular/core';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { AddNewEventService } from 'src/app/services/addNewEvent/add-new-event.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addnewevent',
  templateUrl: './addnewevent.page.html',
  styleUrls: ['./addnewevent.page.scss'],
})
export class AddneweventPage implements OnInit {
  direction = faDirections;

  formData : FormGroup = new FormGroup({
    name: new FormControl(null,{
      updateOn:"change",
      validators: [Validators.required]
    }),
    sport_id: new FormControl(1),
    court_id: new FormControl(1),
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
    repeat_every_week: new FormControl(false),
    user_id: new FormControl(2),
  })
  
  constructor(
    private connectToApi: AddNewEventService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  submit(){
    if(this.formData.valid){
      var temp = this.formData.value
      temp.repeat_every_week ? temp.repeat_every_week="yes" : temp.repeat_every_week="no"
      console.log(this.formData.value)
      this.navCtrl.navigateForward('add-event-success')
      /*
      this.connectToApi.connectToApi(temp).subscribe(
        (response)=>{
          console.log(response)
          this.navCtrl.back()
        },(error)=>{
          alert(error.message)
        })
        */
     
    }else{
      alert("Please complete form")
    }
  }

}
