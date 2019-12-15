import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../base';
import { Sparring } from 'src/app/models/sparring';
import { Court } from 'src/app/models/court';
import { Comment } from 'src/app/models/comment';
import { Profile } from 'src/app/models/profile';


@Injectable({
  providedIn: 'root'
})
export class SparringService {

  constructor(
    private http: HttpClient
  ) { }

  getUserAccounts(){
    return this.http.get<Profile[]>(baseUrl+'/api/account')
  }

  getAllSparring(){
    return this.http.get<Sparring[]>(
      baseUrl+'/api/sparring',
    )
  }

  getCourt(id: any){
    return this.http.get<Court>(
      baseUrl+'/api/court/'+id
    )
  }
  
  async isJoined(userID: any, sparring_id: any){
    var x: any= await this.http.get(baseUrl+'/api/sparringparticipant').toPromise()
    var y=x.filter((item) => item.sparring_id == sparring_id)
    return y.some((item) => item.user_id == userID)
  }

  async getSparringComments(sparringID: any){
    var x=await this.http.get<Comment[]>(baseUrl+'/api/comment').toPromise()
    return x.filter((item) => item.sparring_id == sparringID) 
  }

  async join(userID: any, sparring_id: any){
    try{
      await this.http.post(baseUrl+"/api/sparringparticipant",{
        "user_id":userID,
        "sparring_id":sparring_id
      }).toPromise()
      return true;
    }catch(Exception){
      return false
    }
  }

  async addComment(userID: any, sparring_id: any, comment: string): Promise<Boolean>{
    try{
      var x= await this.http.post(baseUrl+'/api/comment',{
        "user_id":userID,
        "sparring_id":sparring_id,
        "comment":comment
      }).toPromise()
      return true
    }catch(Exception){
      return false
    }
  }
}
