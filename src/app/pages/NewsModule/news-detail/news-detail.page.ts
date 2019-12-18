import { Component, OnInit, ElementRef } from '@angular/core';
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
    private hostElement: ElementRef,
  ) { }

  url() {
    const iframe = this.hostElement.nativeElement.querySelector('iframe');
    iframe.src = this.route.snapshot.queryParamMap.get('link');
  }

}
