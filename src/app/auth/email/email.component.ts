import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service"
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  constructor(private afAuth:AngularFireAuth, private router:Router,private authService:AuthService) {  }
error:any;
   state: string = '';
  ngOnInit() {
  }
  onSubmit(form :NgForm){
const email = form.value.email;
    const password = form.value.password;
 this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then(
        (response) => {
            this.router.navigate(["/recipes"]);
            this.authService.getToken();
        }
      )
      .catch(
        (err) =>{
          this.error=err;
        }
      )
//this.loginForm.reset();

  }

}
