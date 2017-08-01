import {
  Http,
  Response
} from "@angular/http";
import {
  Injectable
} from "@angular/core";
import {
  Recipe
} from "../recipes/recipe.model";
import "rxjs/Rx";

import {
  ShoppingService
} from "./shopping.service";
import {
  Ingredients
} from "../shared/ingredients.model"
import { AuthService } from "./auth.service";
@Injectable()
export class DatabaseService {
  constructor(private http: Http, private shoppingService: ShoppingService,private authService:AuthService) {}
  onSaveData(recipes: Recipe[]) {
    const token=this.authService.getToken();
    return this.http.put("https://my-recipe-book-97ee7.firebaseio.com/recipebook.json?auth="+token, recipes).map(
      (response) => {
        console.log(response);
      }
    );
  }
  onFetchData() {
    const token=this.authService.getToken();
    return this.http.get("https://my-recipe-book-97ee7.firebaseio.com/recipebook.json?auth="+token);
  }

  onSaveShoppingCart(ingredients: Ingredients[]) {
    const token=this.authService.getToken();
    return this.http.put("https://my-recipe-book-97ee7.firebaseio.com/shoppingCart/cart.json?auth="+token, ingredients);
  }

  onFetchShopppingCart() {
const token=this.authService.getToken();
    return this.http.get("https://my-recipe-book-97ee7.firebaseio.com/shoppingCart/cart.json?auth="+token);
  }


}
