import { Component,HostBinding} from '@angular/core';
import {AuthService} from "../../services/auth.service"
import {Router} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class SigninComponent  {
photo="http://www.cakebakeandsweets.com/wp-content/uploads/sites/3/2013/11/Melbourne-Website-background-image-1.jpg"
  constructor(private authService: AuthService,private router:Router,private afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe (
  (auth)=>{
    if(auth){
      this.authService.token=this.authService.getToken();
    this.router.navigate(["/recipes"]);
    
    }
  }
)
  }
  error:any;

  loginGoogle(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(
      (response)=>{
       
         this.router.navigate(["/"]);
            this.authService.getToken();
      }
    ).catch(
      (err)=>this.error=err
    );
    }
 loginFb(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(
      (response)=>{
       
         this.router.navigate(["/"]);
            this.authService.getToken();
      }
    ).catch(
      (err)=>this.error=err
    );
    }


}
