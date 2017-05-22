$(function() {

  recipes = [
    {
      "title": "Chicken and Broccoli",
      "servings": 2,
      "ingredients": [
        { "name":"chicken", "amount":1, "unit":"breast" },
        { "name":"broccoli", "amount":1, "unit":"head" },
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
      "servings": 4,
      "ingredients": [
        { "name":"potatoes", "amount":2, "unit":"large" },
        { "name":"salt", "amount":1, "unit":"tsp" },
        { "name":"olive oil", "amount":2, "unit":"tbsp" },
        { "name":"onion", "amount":0.5, "unit":"medium" },
        { "name":"black pepper", "amount":0.5, "unit":"tsp" },
        { "name":"eggs", "amount":8, "unit":"" },
        { "name":"butter", "amount":1, "unit":"tbsp" },
        { "name":"tortillas", "amount":8, "unit":"" },
        { "name":"mexican cheese", "amount":1, "unit":"cup" },
      ],
      "directions": "Put the potatoes in a large saucepan and add enough cold salted water to cover. Bring to a boil over high heat then reduce the heat to medium-low and simmer until the potatoes are tender when pierced with the tip of a knife (about 25 minutes). Drain and rinse under cold running water. Refridgerate for 2-8 hours. Cut the potatoes into small cubes. In a large skillet, heat the olive oil over medium-high heat. Add the potato cubes and cook, stirring occasionally until browned (about 10 minutes). Chop the onion and add it to the potatoes, stirring often for 2 minutes. Remove from heat and season lightly with salt and pepper. Meanwhile, whisk together the eggs, 3/4 tsp salt, and 1/4 tsp pepper in a bowl until thoroughly blended. Place the skillet with potatoes back over medium-low heat and add the butter, heating until melted. Add the egg mixture to the skillet and cook until the eggs begin to set, about 20 seconds. Stir with a spatula, scraping up the eggs from the bottom and sides of the skillet, and folding them in to the center. Repeat until the eggs are barely cooked and still moist. Remove the skillet from the heat and let stand to allow the residual heat to finish cooking the eggs. Fill tortillas with the filling and sprinkle with cheese."
    },
    {
      "title": "Hamburgers",
      "servings": 3,
      "ingredients": [
        { "name":"ground beef", "amount":1, "unit":"pound" },
        { "name":"salt", "amount":1, "unit":"tsp" },
        { "name":"black pepper", "amount":0.5, "unit":"tsp" },
        { "name":"butter", "amount":1, "unit":"tbsp" },
        { "name":"hamburger buns", "amount":3, "unit":"" },
      ],
      "directions": "Mix salt and pepper into into ground beef and divide evenly into three patties. Use your thumb to imprint a dimple into the middle of each burger (which prevents the burgers from puffing up while cooking). Melt butter into a large skillet over medium heat. Cook patties for 3 to 4 minutes on each side, depending on how well done you want your burgers. Remove burgers from heat and place on a plate and let them rest for 5 minutes, covered with aluminum foil. Place on buns with your favorite toppings and eat."
    },
    {
      "title": "Meatloaf",
      "servings": 8,
      "ingredients": [
        { "name":"ground beef", "amount":1.5, "unit":"pounds" },
        { "name":"eggs", "amount":1, "unit":"" },
        { "name":"onion", "amount":1, "unit":"medium" },
        { "name":"milk", "amount":1, "unit":"cup" },
        { "name":"bread crumbs", "amount":1, "unit":"cup" },
        { "name":"salt", "amount":2, "unit":"tsp" },
        { "name":"black pepper", "amount":1, "unit":"tsp" },
        { "name":"brown sugar", "amount":2, "unit":"tbsp" },
        { "name":"mustard", "amount":2, "unit":"tbsp" },
        { "name":"ketchup", "amount":0.3, "unit":"cup" },
      ],
      "directions": "Pre-heat oven to 350 degrees. Chop onion into small pieces. Combine the ground beef, egg, onion, milk, bread crumbs, salt, and pepper. Place in a lightly greased 5x9 inch loaf pan (or other available baking dish). In a separate bowl, combine the brown sugar, mustard, and ketchup. Mix well and pour over the meatloaf. Bake at 350 degrees for 1 hour."
    },
    {
      "title": "Roasted Vegetables",
      "servings": 4,
      "ingredients": [
        { "name":"broccoli", "amount":1, "unit":"head" },
        { "name":"zucchini", "amount":1, "unit":"large" },
        { "name":"cherry tomatoes", "amount":1, "unit":"cup" },
        { "name":"carrots", "amount":3, "unit":"" },
        { "name":"portobello mushrooms", "amount":10, "unit":"ounces" },
        { "name":"olive oil", "amount":0.25, "unit":"cup" },
        { "name":"salt", "amount":2, "unit":"tsp" },
        { "name":"black pepper", "amount":2, "unit":"tsp" },
      ],
      "directions": "Pre-heat oven to 425 degrees. Chop or slice all vegetables into medium pieces and toss in bowl with olive oil, salt, and pepper. Divide vegetables evenly on two pans. Roast vegetables for 35 minutes, removing the vegetables from the oven every 15 minutes to stir around."
    },
    {
      "title": "Chickpea and Vegetable Stir Fry",
      "servings": 4,
      "ingredients": [
        { "name":"red onion", "amount":0.5, "unit":"" },
        { "name":"red bell pepper", "amount":0.5, "unit":"" },
        { "name":"brussels sprouts", "amount":8, "unit":"" },
        { "name":"chickpeas", "amount":1, "unit":"15oz can" },
        { "name":"water", "amount":0.5, "unit":"cup" },
        { "name":"soy sauce", "amount":0.5, "unit":"cup" },
        { "name":"sugar", "amount":2, "unit":"tbsp" },
        { "name":"cornstarch", "amount":2, "unit":"tsp" },
        { "name":"sriacha sauce", "amount":2, "unit":"tsp" },
      ],
      "directions": "Slice the onion and bell pepper. Cut the brussels sprouts into quarters. Drain the can of chickpeas. Pour some boiling water into a wok or large skillet and cook the onion, bell pepper, and brussels sprouts over high heat for 1.5 minutes. Brain them and set them to the side. Place 1/2 cup water, soy sauce, sugar, cornstarch, and sriacha sauce in the wok or skillet and cook on medium-high for 5 minutes until the sauce thickens. Add the cooked veggies and the chickpeas and cook over medium-high heat for another 2 minutes."
    },
    {
      "title": "Slow-Cooker Pulled Pork Sandwiches",
      "servings": 4,
      "ingredients": [
        { "name":"brown sugar", "amount":3, "unit":"tbsp" },
        { "name":"paprika", "amount":2, "unit":"tsp" },
        { "name":"mustard powder", "amount":1, "unit":"tsp" },
        { "name":"cumin", "amount":0.5, "unit":"tsp" },
        { "name":"salt", "amount":1, "unit":"tsp" },
        { "name":"black pepper", "amount":1, "unit":"tsp" },
        { "name":"boneless pork shoulder", "amount":4, "unit":"pounds" },
        { "name":"vegetable oil", "amount":2, "unit":"tsp" },
        { "name":"apple cider vinegar", "amount":0.5, "unit":"cup" },
        { "name":"tomato paste", "amount":3, "unit":"tbsp" },
        { "name":"hamburger buns", "amount":4, "unit":"" },
      ],
      "directions": "Combine 1 tablespoon brown sugar, the paprika, mustard powder, cumin, 2 teaspoons salt and 1/2 teaspoon pepper in a small bowl. Rub the spice mixture all over the pork. Heat the vegetable oil in a large skillet; add the pork and cook, turning, until browned on all sides (5 minutes). Remove the pork and transfer to a plate; whisk 3/4 cup water into the drippings in the skillet. Transfer the liquid to a 5-to-6-quart slow cooker. Add the vinegar, tomato paste, the remaining 2 tablespoons brown sugar and 2 cups water to the slow cooker and whisk to combine. Add the pork, cover and cook on low, 8 hours. Remove the pork and transfer to a cutting board. Strain the liquid into a saucepan, bring to a boil and cook until reduced by half, about 10 minutes. Season with salt. Roughly chop the pork and mix in a bowl with 1 cup of the reduced cooking liquid, and salt and vinegar to taste. Serve on buns with choice of barbecue sauce and coleslaw."
    }
  ]

  $('#shopping_list').hide();
  $('#recipes').hide();

  $('#serving_selection button').click(function(e){
    e.preventDefault();

    servings = parseInt($('#serving_selection input').val());
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
