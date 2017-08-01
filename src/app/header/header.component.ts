import {Component} from "@angular/core"
import {RecipeService} from "../services/recipe.service";
import {DatabaseService} from "../services/database.service";
import {Recipe} from "../recipes/recipe.model";
import {Response} from "@angular/http";
import "rxjs/Rx";
import {AuthService} from "../services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})

export class HeaderComponent {
  recipe: Recipe[];

  constructor(private recipeService: RecipeService, private database: DatabaseService, private authService: AuthService) {
  }

  onSave() {
    this.recipe = this.recipeService.getRecipes()
    this.database.onSaveData(this.recipe).subscribe();
  }

  onFetch() {

    this.database.onFetchData().map(
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

  onLogout() {
    this.authService.onLogout();
  }

}
