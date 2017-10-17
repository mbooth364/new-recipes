import { NgModule } from '@angular/core';
import { RecipeListComponent } from 'app/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from 'app/recipe-detail/recipe-detail.component';
import { ConvertToSpacesPipe } from 'app/shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { RecipeGuardService } from '../recipe-guard.service';
import { RecipeService } from '../recipe.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'recipes', component: RecipeListComponent },
      { path: 'recipes/:id', 
        canActivate:[ RecipeGuardService ],
        component: RecipeDetailComponent },
    ]),
    SharedModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent,
    ConvertToSpacesPipe,
  ],
  providers: [
    RecipeService,
    RecipeGuardService
  ]
})
export class RecipeModule { }
