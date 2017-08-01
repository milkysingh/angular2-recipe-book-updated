import { Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service"
import { NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn } from '../router.animations';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
   animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router,private afAuth:AngularFireAuth) {}
 error:any;
 state: string = '';

  ngOnInit() {}
  onSubmit(form: NgForm) {
   
    const email = form.value.email;
    const password = form.value.password;
  this.afAuth.auth.createUserWithEmailAndPassword(email,password)
  .then(
    (response)=>{
      this.authService.getToken();
 this.router.navigate(["/recipes"]);
    }
  )
      .catch(
        err => this.error=err
      )
  
  }
}
