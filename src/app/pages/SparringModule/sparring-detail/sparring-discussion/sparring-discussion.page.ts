import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sparring-discussion',
  templateUrl: './sparring-discussion.page.html',
  styleUrls: ['./sparring-discussion.page.scss'],
})
export class SparringDiscussionPage implements OnInit {
  paperPlane = faPaperPlane;
  constructor() { }

  ngOnInit() {
  }

}
