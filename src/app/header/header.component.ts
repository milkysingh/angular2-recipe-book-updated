import {Component,OnInit,} from "@angular/core"
import {RecipeService} from "../services/recipe.service";
import {DatabaseService} from "../services/database.service";
import {Recipe} from "../recipes/recipe.model";
import { AuthService } from "../services/auth.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})

export class HeaderComponent {
  constructor(private recipeService: RecipeService, private database: DatabaseService, private authService: AuthService) {}

  recipe: Recipe[];

  onSave() {
    this.recipe = this.recipeService.getRecipes()
    this.database.onSaveData(this.recipe).subscribe();
  }
  onFetch() {

    this.database.onFetchData();
  }
  onLogout() {
    this.authService.onLogout();
    this.recipeService.fetchedRecipes([]);
  }

}
