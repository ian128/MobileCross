import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  constructor(
    private sanitize: DomSanitizer,
    private route: Router
  ) { }

  ngOnInit() {

  }

  link(){
    return this.sanitize.bypassSecurityTrustResourceUrl("https://www.cnnindonesia.com/");
  }

  openNewsDetails(){
    this.route.navigate(['/','news-detail'])
  }

}
