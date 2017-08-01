import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective} from "./shared/dropdown.directive"
import { RouterModule,Routes } from "@angular/router";
import { AppRouting } from "./approuting.module";
import { RecipeSelectComponent } from './recipes/recipe-select/recipe-select.component';
import { AppDropdownClickDirective } from "./shared/app-dropdown-click.directive";
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DatabaseService } from "./services/database.service";
import { HttpModule } from "@angular/http";
import { RecipeService } from "./services/recipe.service";
import { ShoppingService } from "./services/shopping.service";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService  } from "./services/auth.service";
import {  AuthGuard} from "./auth/auth-guard-.service";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EmailComponent } from './auth/email/email.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeSelectComponent,
    AppDropdownClickDirective,
    RecipeEditComponent,
    SignupComponent,
    SigninComponent,
    EmailComponent,
   
  ],
  imports: [
    BrowserModule,
   AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
 
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyBO57qdzeQsJtv7UoPPY-qRTGhFH4gK44Q",
    authDomain: "my-recipe-book-97ee7.firebaseapp.com",
    databaseURL: "https://my-recipe-book-97ee7.firebaseio.com",
    projectId: "my-recipe-book-97ee7",
    storageBucket: "my-recipe-book-97ee7.appspot.com",
    messagingSenderId: "498447742764"
    }),
    AngularFireAuthModule
  ],
  providers: [DatabaseService,ShoppingService,RecipeService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
