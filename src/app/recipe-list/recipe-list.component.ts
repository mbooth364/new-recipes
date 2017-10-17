import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'app/recipe';
import { RecipeService } from 'app/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  pageTitle: string = 'New Recipes';
  imageWidth: number = 100;
  imageMargin: number = 2;
  highlightedDiv: number;
  showImage: boolean = false;
  changeColorRed: boolean = false;
    // listFilter: string = ''
  _listFilter: string;
  errorMessage: string;
  

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredRecipes= this.listFilter ? this.recipeFilter(this.listFilter) : this.recipes;
  }
  filteredRecipes: IRecipe[];

  recipes: IRecipe[] = [];
   
  

  constructor(private _recipeService: RecipeService) { 
    this.listFilter = '';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Recipe List ' + message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  recipeFilter(filterBy: string): IRecipe[] {
    filterBy = filterBy.toLowerCase();
    return this.recipes.filter((recipe: IRecipe) =>
  recipe.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  

  toggleHighlight(newValue: number) {
    if (this.highlightedDiv === newValue) {
      this.highlightedDiv = 0;
    }
    else {
      this.highlightedDiv = newValue;
    }
  }

  ngOnInit() {
    this._recipeService.getRecipes()
      .subscribe(recipes => {
        this.recipes = recipes,
        this.filteredRecipes = this.recipes;
      },
        error => this.errorMessage = <any>error);
    
    
  }

}
