import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IRecipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  pageTitle: string = "Recipe Detail";
  recipe: IRecipe;
  errorMessage: string;
  

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _recipeService: RecipeService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.getRecipe(id);
    // this.pageTitle += `:${id}`;
    // this.recipe = {
    //   "recipeId": 2,
    //   "name": "Buff Balls",
    //   "category": "tapas",
    //   "cost": 0.78,
    //   "starRating": 3.6,
    //   "ingredients": "chicken, redhot, cheese",
    //   "imageUrl": "https://s3-media2.fl.yelpcdn.com/bphoto/0kiVfKsI9EvFPz1zDvIIwQ/o.jpg"
    // }
  }

  getRecipe(id: number) {
    this._recipeService.getRecipe(id).subscribe(
      recipe => this.recipe = recipe,
      error => this.errorMessage = <any>error)
  }

  onBack(): void {
    this._router.navigate(['/recipes']);
  }
}
