import {Component,OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service"
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth, private authService: AuthService) {}
  showRecipe: boolean = true;
  showShoppinglist: boolean;
  getRequest(val: {
    recipeVal: boolean,
    shoppingVal: boolean
  }) {
    this.showRecipe = val.recipeVal;
    this.showShoppinglist = val.shoppingVal;
  }
  ngOnInit() {
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth) {
        this.authService.getToken();
        }
      }
    )
    console.log(localStorage.getItem("firebase"));
  }

}
