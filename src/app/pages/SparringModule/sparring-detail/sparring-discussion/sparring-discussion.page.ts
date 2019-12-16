import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Court } from 'src/app/models/court';
import { Sparring } from 'src/app/models/sparring';
import { Comment } from 'src/app/models/comment';
import { SparringService } from 'src/app/services/sparring/sparring.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-sparring-discussion',
  templateUrl: './sparring-discussion.page.html',
  styleUrls: ['./sparring-discussion.page.scss'],
})
export class SparringDiscussionPage implements OnInit {
  paperPlane = faPaperPlane;
  court: Court
  sparring: Sparring
  comments: Comment[]
  commentBox: string = ""

  userID: string

  loadingComment: Boolean

  sendingMessage: Boolean

  users:{}


  constructor(
    private sparringSvc: SparringService,
    private authSvc: AuthService
  ) { }

  async ngOnInit() {
    this.loadingComment=true

    var res = JSON.parse(sessionStorage.getItem('sparring-details'))
    this.court = res.court
    this.sparring = res.sparring
    this.userID = this.authSvc.getLoggedInUserID()
    
    this.sparringSvc.getUserAccounts().subscribe(
      (res: Profile[])=>{
        this.users=[]
        res.forEach((item)=>{
          this.users[item.id]=item
        })
      }
    )
    this.comments = await this.sparringSvc.getSparringComments(this.sparring.id)

    this.loadingComment=false
  }

  async sendComment(){
    this.sendingMessage=true

    var com = this.commentBox
    if(await this.sparringSvc.addComment(
      this.userID,
      this.sparring.id,
      com
    )){
      this.comments.push({
        id:'',
        comment: com,
        sparring_id: this.sparring.id,
        user_id: this.userID
      })
      this.commentBox=""
    }
    this.sendingMessage=false

  }

}
