import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage{

  constructor(
    private route: ActivatedRoute,
    private sanitize: DomSanitizer,
  ) { }

  url() {
    return this.sanitize.bypassSecurityTrustResourceUrl(this.route.snapshot.queryParamMap.get('link'));
  }

}
