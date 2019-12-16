import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AddNewEventService } from 'src/app/services/addNewEvent/add-new-event.service';
import { Court } from 'src/app/models/court';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
})
export class SelectFieldComponent implements OnInit {
  listOfCourts: Court[]
  loading: Boolean
  sport_id

  constructor(
    private modalCtrl: ModalController,
    private addNewEventSvc: AddNewEventService,
  ) { }

  ngOnInit() {
    this.loading=true
    console.log(this.sport_id);
    this.addNewEventSvc.getAllCourts().subscribe(
      (res)=>{
        this.listOfCourts=res
        this.listOfCourts=this.listOfCourts.filter((item)=> item.sport_id == this.sport_id)
        this.loading=false
        console.log(this.listOfCourts)
      }
    )
  }

  close(){
    this.modalCtrl.dismiss({
      canceled: true
    }); 
  }

  useThisCourt(index){
    this.modalCtrl.dismiss({
      canceled:false,
      court: this.listOfCourts[index]
    })
  }
}
