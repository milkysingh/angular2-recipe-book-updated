import * as firebase from 'firebase/app';
import {  Router} from "@angular/router";
import {  Injectable} from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable()
export class AuthService {
  token: string;
constructor(private router:Router,private afAuth:AngularFireAuth){}

  // signupUser(email: string, password: string) {
// this.afAuth.auth.createUserWithEmailAndPassword(email,password)
//       .catch(
//         error => console.log(error)
//       )
  

//   signinUser(email: string, password: string) {
// // this.afAuth.auth.signInWithEmailAndPassword(email,password)
// //       .then(
// //         (response) => {
// //             this.router.navigate(["/"]);
// //             firebase.auth().currentUser.getToken()
        
// //         .then(
// //           (token) => this.token = token
// //         )
// //         }
// //       )
// //       .catch(
// //         (err) =>{
// //           return err
// //         }
// //       )
//   }

  getToken() {
    firebase.auth().currentUser.getToken().then(
      (token) =>{
         this.token = token
      
      }
    )
    return this.token;
  }
  isAuthenticated() {
    return this.token != null;
  }
  onLogout() {
    this.afAuth.auth.signOut();
    this.token = null;
  }
}
