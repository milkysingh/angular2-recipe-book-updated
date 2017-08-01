import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../../services/recipe.service"
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})
export class RecipeListComponent implements OnInit {

  recipe: Recipe[];
  state: "";

  constructor(private recipeService: RecipeService, private databaseService: DatabaseService) {
  }


  ngOnInit() {
    this.recipeService.changedRecipe.subscribe(
      (recipe: Recipe[]) => {
        this.recipe = recipe;
      }
    )
    this.recipe = this.recipeService.getRecipes();

  }


}
