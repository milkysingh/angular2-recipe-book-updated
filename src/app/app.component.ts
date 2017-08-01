import {
  Component,
  OnInit
} from '@angular/core';
import {RecipeService}from"./services/recipe.service";
import { ShoppingService} from "./services/shopping.service";
import {AuthService} from "./services/auth.service"
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 providers:[RecipeService,ShoppingService]
})
export class AppComponent implements OnInit {
  constructor(private afAuth:AngularFireAuth,private router:Router,private authService:AuthService) {}
  showRecipe: boolean = true;
  showShoppinglist: boolean;
  getRequest(val: {
    recipeVal: boolean,
    shoppingVal: boolean
   }) {
    this.showRecipe = val.recipeVal;
    this.showShoppinglist = val.shoppingVal;
  }
  ngOnInit(){
    this.afAuth.authState.subscribe(
      (auth)=>{
        if(auth){
        this.authService.token=this.authService.getToken();
        }
      }
    )
  }
}
