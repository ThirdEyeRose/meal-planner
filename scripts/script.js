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
    },
    {
      "title": "Lasagna",
      "servings": 6,
      "ingredients": [
        { "name":"lasagna noodles", "amount":1, "unit":"box" },
        { "name":"pasta sauce", "amount":1, "unit":"jar" },
        { "name":"italian sausage or ground beef", "amount":1, "unit":"pound" },
        { "name":"italian cheese", "amount":2, "unit":"pounds" }
      ],
      "directions": "Pre-heat oven to 350 degrees. Cook lasagna noodles as described on box. Brown meat in skillet. Place ingredients in layers in lasagna pan and cook in over for 45 minutes."
    },
    {
      "title": "Chicken Strips",
      "servings": 6,
      "ingredients": [
        { "name":"chicken", "amount":4, "unit":"breasts" },
        { "name":"buttermilk", "amount":1.5, "unit":"cups"},
        { "name":"flour", "amount":1.5, "unit":"cups"},
        { "name":"seasoning salt", "amount":3, "unit":"tsp" },
        { "name":"vegetable oil", "amount":3, "unit":"cups"}
      ],
      "directions": "Cut chicken breasts into strips. Rinse and dry your chicken strips then submerge them in buttermilk for 15 to 20 minutes, reserving 0.5 cups of buttermilk for the batter. In another bowl, combine 1.5 cups of flour and 3 tsp of seasoning salt and mix well. Add 0.5 cups of buttermilk into the flour mixture and stir lightly with a fork. Pour oil in a large skillet till it is about 1 inch deep. Heat skillet over medium heat. Place several chicken strips in the flour mixture and coat them thoroughly. Place them on a plate and continue to coat chicken strips until they are all coated. Begin cooking the chicken strips a few at a time. Cook them for about a minute and a half on each side until golden and crispy. Then place them on a paper-towel lined plate. Let cool briefly."
    },
    {
      "title": "Potato, Egg, and Cheese Tacos",
      "servings": 6,
      "ingredients": [
        { "name":"", "amount":1, "unit":"" },
      ],
      "directions": ""
    },
    {
      "title": "Hamburgers",
      "servings": 6,
      "ingredients": [
        { "name":"", "amount":1, "unit":"" },
      ],
      "directions": ""
    },
    {
      "title": "Meatloaf",
      "servings": 10,
      "ingredients": [
        { "name":"", "amount":1, "unit":"" },
      ],
      "directions": ""
    }
  ]

  $('#shopping_list').hide();
  $('#recipes').hide();

  $('#serving_selection button').click(function(e){
    e.preventDefault();

    servings = parseInt($('#serving_selection input').val());
    console.log(servings);
    if (isNaN(servings)) {
      alert('Please enter a number of servings!');
    } else {
      resetLists();

      $('#shopping_list').show();
      $('#recipes').show();

      var recipe_selection = selectRecipes(recipes, servings);

      displayShoppingList(recipe_selection);
      displayRecipes(recipe_selection);
    }

  });

  function resetLists() {
    $('#shopping_list ul').html('');
    $('#recipes').html('');
  }

  function selectRecipes(recipes, servings = 10) {
    var recipe_selection = [];

    while (servings > 0) {
      recipe = getRandomRecipe(recipes);
      recipe_selection.push(recipe);
      servings -= recipe.servings;
    }

    return recipe_selection;
  }

  function getRandomRecipe(recipes) {
    return recipes[Math.floor(Math.random()*recipes.length)];
  }

  function displayShoppingList(recipes) {
    $('#shopping_list ul').append(formatIngredientList(getAllIngredients(recipes)));
  }

  function displayRecipes(recipes) {
    $.each(recipes, function(key, recipe){
      $('#recipes').append(formatRecipe(recipe));
    });
  }

  function getIngredients(recipe) {
    return formatIngredientList(recipe.ingredients);
  }

  function getAllIngredients(recipes) {
    var ingredient_list = [];
    $.each(recipes, function(key, recipe){
      $.each(recipe.ingredients, function(key, ingredient){
        if (ingredient_list[ingredient.name])
          ingredient_list[ingredient.name].amount += ingredient.amount;
        else
          ingredient_list[ingredient.name] = {"name": ingredient.name,
                                              "amount": ingredient.amount,
                                              "unit": ingredient.unit };
      });
    });
    return ingredient_list;
  }

  function formatIngredientList(ingredients) {
    var ingredient_list = "";
    for (var key in ingredients) {
      ingredient_list += "<li>" + ingredients[key].amount + " " + ingredients[key].unit
        + " of " + ingredients[key].name + "</li>";
    }
    return ingredient_list;
  }

  function formatRecipe(recipe) {
    return '<h3>'+ recipe.title + '</h3>'
      + '<p><strong>Servings:</strong> ' + recipe.servings + '</p>'
      + '<ul>' + getIngredients(recipe) + '</ul>'
      + '<p><strong>Directions:</strong> <br />' + recipe.directions + '</p>';
  }

})
