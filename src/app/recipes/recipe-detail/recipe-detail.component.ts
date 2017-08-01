import {
  Component,

  OnInit
} from '@angular/core';
import {
  Recipe
} from "../recipe.model";
import {
  ShoppingService
} from "../../services/shopping.service"
import {
  RecipeService
} from "../../services/recipe.service"
import {
  ActivatedRoute,
  Params
} from "@angular/router";
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  getDataFromRecipes: Recipe;
  id: number;

  constructor(private shoppingService: ShoppingService, private recipeService: RecipeService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.getDataFromRecipes = this.recipeService.getRecipeDetail(this.id);

      }
    );

  }
  sendToCart() {

    this.shoppingService.addToCart(this.getDataFromRecipes.ingredients);
  }


  onDelete() {
    this.recipeService.deleteRecipe(this.id);
  }


}
