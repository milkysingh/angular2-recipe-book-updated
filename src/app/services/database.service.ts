import {  Http,  Response} from "@angular/http";
import {  Injectable} from "@angular/core";
import {  Recipe} from "../recipes/recipe.model";
import "rxjs/Rx";
import {  Ingredients} from "../shared/ingredients.model"
import { AuthService } from "./auth.service";
import {RecipeService} from "../services/recipe.service";
@Injectable()
export class DatabaseService {
  constructor(private http: Http,private authService:AuthService,private recipeService:RecipeService) {}
  onSaveData(recipes: Recipe[]) {
    const token=this.authService.getToken();
    return this.http.put("https://my-recipe-book-97ee7.firebaseio.com/recipebook.json?auth="+token, recipes).map(
      (response) => {
        alert("Recipe Saved Sucessfully");
      }
    );
  }
  onFetchData() {
    const token=this.authService.getToken();
     this.http.get("https://my-recipe-book-97ee7.firebaseio.com/recipebook.json?auth="+token).map(
        (response: Response) => {
          const recipe: Recipe[] = response.json();
          for (var item of recipe) {
            if (!item['ingredients']) {
              
              item['ingredients'] = [];
            }
          }
          return recipe;
        }
      )
      .subscribe(
        (recipe: Recipe[]) => {
          // this.recipe=response
          this.recipeService.fetchedRecipes(recipe);
        }
      )
  }

  onSaveShoppingCart(ingredients: Ingredients[]) {
    const token=this.authService.getToken();
    return this.http.put("https://my-recipe-book-97ee7.firebaseio.com/shoppingCart/cart.json?auth="+token, ingredients).map(
      (response)=>{alert("Card saved sucessfully")}
    );
  }

  onFetchShopppingCart() {
const token=this.authService.getToken();
    return this.http.get("https://my-recipe-book-97ee7.firebaseio.com/shoppingCart/cart.json?auth="+token);
  }


}
