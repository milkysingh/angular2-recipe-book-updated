import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service"
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AngularFireAuth} from 'angularfire2/auth';
import {fallIn, moveIn} from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  error: any;
  state: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.router.navigate(["/recipes"]);
          this.authService.getToken();
        }
      )
      .catch(
        (err) => {
          this.error = err;
        }
      )

  }

}
