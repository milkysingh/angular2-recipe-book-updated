import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {
  ShoppingService
} from "../../services/shopping.service";
import {
  NgForm
} from "@angular/forms";
import {
  Subscription
} from "rxjs/Subscription";
import {
  Ingredients
} from '../../shared/ingredients.model'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editingStatus = false;
  editedItemIndex;
  subscription: Subscription;
  editIngredient: Ingredients;
  @ViewChild("f") slEdit: NgForm;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.subscription = this.shoppingService.onEditing.subscribe((index: number) => {
      this.editingStatus = true;
      this.editedItemIndex = index;
      this.editIngredient = this.shoppingService.getIngredient(index);
      this.slEdit.setValue({
        name: this.editIngredient.name,
        amount: this.editIngredient.amount
      });


    });
  }

  add(form: NgForm) {
    this.editIngredient = new Ingredients(form.value.name, form.value.amount);

    if (this.editingStatus) {
      this.shoppingService.updateItem(this.editedItemIndex, this.editIngredient);

    } else {
      this.shoppingService.addData({
        ingredientName: form.value.name,
        ingredientNumber: form.value.amount
      });
    }
    this.editingStatus=false;
    form.reset();

  }

onClear()
{
  this.slEdit.reset();
  this.editingStatus=false;
}
  onDelete(){
    this.shoppingService.deleteItem(this.editedItemIndex);
    this.onClear();

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
