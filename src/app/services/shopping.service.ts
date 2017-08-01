import {
  Ingredients
} from '../shared/ingredients.model';
import {
  Subject
} from "rxjs/Subject"
export class ShoppingService {
  changedIngredients = new Subject < Ingredients[] > ();
  onEditing = new Subject < number > ();
  private ingredients: Ingredients[] = [];
  addData(val: {
    ingredientName: string,
    ingredientNumber: number
  }) {
    this.ingredients.push(new Ingredients(val.ingredientName, val.ingredientNumber));
    this.changedIngredients.next(this.ingredients.slice());
  }
  returnIngredients() {
    return this.ingredients.slice();

  }
  addToCart(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient);
    this.changedIngredients.next(this.ingredients.slice());

  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateItem(index: number, newIngredient: Ingredients) {

    this.ingredients[index] = newIngredient;

    this.changedIngredients.next(this.ingredients.slice());

  }
  deleteItem(index: number) {
    this.ingredients.splice(index, 1);
    this.changedIngredients.next(this.ingredients.slice());
  }
  updateCart(ingredients: Ingredients[]) {
    this.ingredients = ingredients;
    this.changedIngredients.next(this.ingredients.slice());
  }


}
