$(function() {

  recipes = [
    {
      "title": "Chicken and Broccoli",
      "servings": 2,
      "ingredients": [
        { "name":"chicken", "amount":1, "unit":"breast" },
        { "name":"brocoli", "amount":1, "unit":"head" },
        { "name":"salt", "amount":0.5, "unit":"tsp" },
        { "name":"black pepper", "amount":0.5, "unit":"tsp" }
      ],
      "directions": "Pre-heat your over to 350 degrees. Place chicken breast in a glass pan, and drizzle with olive oil. Rub the olive oil on the chicken breast to lightly coat it. Dusting the breast lightly with salt and black pepper. In the other half of the pan, chop and place broccoli. Don't layer the pieces too thick, but they can and should overlap some. Drizzle with olive oil and dust with salt and black pepper. Cook for 40 minutes."
    }
  ]

  displayShoppingList(recipes);
  displayRecipes(recipes);

  function displayShoppingList(recipes) {
    $('#shopping_list').append('<ul>');
    $.each(recipes, function(key, recipe){
      $('#shopping_list').append(getIngredients(recipe));
    });
    $('#shopping_list').append('</ul>');
  }

  function displayRecipes(recipes) {
    $.each(recipes, function(key, recipe){
      $('#recipes').append(formatRecipe(recipe));
    });
  }

  function getIngredients(recipe) {
    ingredient_list = "";
    $.each(recipe.ingredients, function(key, ingredient) {
      ingredient_list += "<li>" + ingredient.amount + " " + ingredient.unit
        + " of " + ingredient.name + "</li>";
    });
    return ingredient_list
  }

  function formatRecipe(recipe) {
    return '<h3>'+ recipe.title + '</h3>'
      + '<p><strong>Servings:</strong> ' + recipe.servings + '</p>'
      + '<p><strong>Directions:</strong> <br />' + recipe.directions + '</p>';
  }

})
