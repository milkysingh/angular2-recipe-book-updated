import {
  Recipe
} from "../recipes/recipe.model"
import {
  Ingredients
} from "../shared/ingredients.model"
import {
  Subject
} from "rxjs/Subject"

export class RecipeService {
  // recipeSelected = new EventEmitter < Recipe > ();
  changedRecipe = new Subject < Recipe[] > ();
  private recipe: Recipe[] = [
    new Recipe("Masala Paneer Recipe",
      "This is for testing purposes",
      "http://curryindian.com/wp-content/uploads/2014/01/W_paneerButtermasala1.jpg", [new Ingredients("paneer", 1),
        new Ingredients("tomatoes", 4)
      ]
    ),

    new Recipe("Momos Recipe",
      "This is for testing purposes",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg", [new Ingredients("Chicken", 1),
        new Ingredients("flour", 20)
      ])
  ];

  getRecipes() {
    return this.recipe.slice();
  }
  getRecipeDetail(id: number) {

    return this.recipe[id];

  }
  addRecipe(newRecipe: Recipe) {
    this.recipe.push(newRecipe);
    this.changedRecipe.next(this.recipe.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipe[index] = newRecipe;
    this.changedRecipe.next(this.recipe.slice());
  }

  deleteRecipe(index: number) {
    this.recipe.splice(index, 1);
    this.changedRecipe.next(this.recipe.slice());

  }

  fetchedRecipes(recipes:Recipe[]){
    this.recipe=recipes;
      this.changedRecipe.next(this.recipe.slice());
  }

}
