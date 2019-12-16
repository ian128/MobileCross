import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  constructor(
    private route: Router,
    public http: HttpClient,
    public loadingController: LoadingController
  ) { 
    this.getNewsList()
  }
  newsList:any[]=[]

  async getNewsList(){
    const loading = await this.loadingController.create({
      message: 'Loading..',
    });
    await loading.present();

    this.http.get('https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=b1374a9fb80a49fe87b4ca8794577a56').subscribe(data=>{
      loading.dismiss()
      this.newsList=data["articles"]
      console.log(this.newsList)
      loading.dismiss()
    })
  }

  ngOnInit() {

  }
  
  openNewsDetails(s){
    this.route.navigate(['/','news-detail'], { queryParams: { link: s } })
  }

}
