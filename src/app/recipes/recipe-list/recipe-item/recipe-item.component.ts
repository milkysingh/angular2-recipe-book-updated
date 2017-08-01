import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {fallOut} from '../../../auth/router.animations';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  animations: [fallOut()],
})
export class RecipeItemComponent implements OnInit {
  state = "";
  @Input() recipeItem: Recipe;
  @Input() index: number;


  ngOnInit() {

  }


}
