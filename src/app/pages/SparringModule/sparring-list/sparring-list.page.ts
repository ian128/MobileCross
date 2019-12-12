import { Component, OnInit } from '@angular/core';
import { SparringService } from 'src/app/services/sparring/sparring.service';
import { Sparring } from 'src/app/models/sparring';
import { Court } from 'src/app/models/court';
import { sports } from 'src/app/services/base';
import { LoadingController } from '@ionic/angular';

type SparringPair={
  sparring: Sparring
  court: Court
}

@Component({
  selector: 'app-sparring-list',
  templateUrl: './sparring-list.page.html',
  styleUrls: ['./sparring-list.page.scss'],
})

export class SparringListPage implements OnInit {
  sparringPair: SparringPair[] = []

  sparringPairFiltered: SparringPair[] = []

  constructor(
    private sparringSvc: SparringService,
    private loadingController: LoadingController
  ) { }

  async ngOnInit() {

    let loading = await this.loadingController.create({
      message: 'Loading..',
    });
    await loading.present();

    var sparringList: Sparring[] = await this.sparringSvc.getAllSparring().toPromise()

    for(let n = 0 ; n < sparringList.length; n++){
      this.sparringPair.push({
        'sparring': sparringList[n],
        'court': await this.sparringSvc.getCourt(sparringList[n].court_id).toPromise()
      })
    }
    
    this.sparringPairFiltered=this.sparringPair.filter(
      (item)=> item.sparring.sport_id == sports.badminton
    )
   
    await loading.dismiss();
  }

  select(e) {
    if(this.sparringPair.length > 0){
      this.sparringPairFiltered=this.sparringPair.filter(
        (item)=> item.sparring.sport_id == sports[e]
      )
    }
  }

}
