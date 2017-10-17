export interface IRecipe {
    recipeId: number;
    name: string;
    category: string;
    cost: number;
    starRating: number;
    ingredients: string;
    imageUrl: string;
}