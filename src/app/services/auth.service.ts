import * as firebase from 'firebase/app';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
  }

  getToken() {
    firebase.auth().currentUser.getToken().then(
      (token) => {
        this.token = token;
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
    this.router.navigate(["/signin"]);
  }
}
