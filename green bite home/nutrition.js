// Recipe data
const recipes = [
  {
    id: 1,
    title: "Rainbow Power Bowl",
    category: "breakfast",
    prepTime: "25 mins",
    calories: "320 calories",
    description: "A vibrant bowl packed with colorful vegetables, quinoa, and a zesty lemon tahini dressing.",
    image: "./photos/salad bowl.jpeg",
    modalImage: "./photos/smoothie bowl.jpg",
    ingredients: [
      "1 cup cooked quinoa",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, diced",
      "1 bell pepper, sliced",
      "1 carrot, grated",
      "2 cups mixed greens",
      "1 avocado, sliced",
      "2 tbsp sunflower seeds",
      "2 tbsp lemon tahini dressing"
    ],
    instructions: [
      "Prepare quinoa according to package instructions and let it cool.",
      "Chop all vegetables and arrange them in bowls.",
      "Add cooked quinoa to the bowls.",
      "Top with avocado slices and sunflower seeds.",
      "Drizzle with lemon tahini dressing before serving."
    ],
    nutritionInfo: "This vibrant bowl provides a balanced mix of complex carbohydrates, healthy fats, and plant-based protein. It's rich in vitamins A, C, and K, as well as fiber and antioxidants."
  },
  {
    id: 2,
    title: "Avocado & Egg Toast",
    category: "breakfast",
    prepTime: "15 mins",
    calories: "380 calories",
    description: "Creamy avocado and perfectly poached eggs on whole grain toast with a sprinkle of chili flakes.",
    image: "./photos/avacado toast.jpg",
    modalImage: "./photos/avacado toast.jpg",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tbsp lemon juice",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "Microgreens for garnish"
    ],
    instructions: [
      "Toast the bread until golden and crisp.",
      "Mash the avocado with lemon juice, salt, and pepper.",
      "Poach or fry the eggs to your preference.",
      "Spread the mashed avocado on toast.",
      "Top with eggs, sprinkle with pepper flakes and microgreens."
    ],
    nutritionInfo: "This breakfast provides healthy fats from avocado, quality protein from eggs, and complex carbohydrates from whole grain bread. It's a balanced meal that will keep you satisfied for hours."
  },
  {
    id: 3,
    title: "Antioxidant Berry Smoothie",
    category: "breakfast",
    prepTime: "10 mins",
    calories: "280 calories",
    description: "A refreshing blend of mixed berries, spinach, Greek yogurt, and a touch of honey.",
    image: "./photos/Antioxidant Berry Smoothie.jpg",
    modalImage: "./photos/Antioxidant Berry Smoothie.jpg",
    ingredients: [
      "1 cup mixed berries (fresh or frozen)",
      "1 cup spinach",
      "1/2 cup Greek yogurt",
      "1/2 cup almond milk",
      "1 tbsp honey or maple syrup",
      "1 tbsp chia seeds",
      "1/2 tsp vanilla extract"
    ],
    instructions: [
      "Add all ingredients to a blender.",
      "Blend on high until smooth and creamy.",
      "If too thick, add more almond milk until desired consistency.",
      "Pour into a glass and enjoy immediately."
    ],
    nutritionInfo: "Packed with antioxidants from berries, protein from Greek yogurt, and fiber from chia seeds. This smoothie supports immune function and provides sustained energy."
  },
  {
    id: 4,
    title: "Ginger Garlic Stir Fry",
    category: "lunch",
    prepTime: "20 mins",
    calories: "350 calories",
    description: "A quick and flavorful stir fry with colorful vegetables, tofu, and an aromatic ginger garlic sauce.",
    image: "./photos/Ginger Garlic Stir Fry.jpg",
    modalImage: "./photos/Ginger Garlic Stir Fry.jpg",
    ingredients: [
      "200g firm tofu, cubed",
      "2 cups mixed vegetables (broccoli, bell peppers, carrots)",
      "2 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tbsp olive oil",
      "1 tsp honey or maple syrup",
      "1 tsp rice vinegar",
      "Sesame seeds for garnish"
    ],
    instructions: [
      "Press tofu to remove excess water, then cube.",
      "Heat oils in a wok or large pan over high heat.",
      "Add tofu and cook until golden brown on all sides.",
      "Add garlic and ginger, stir for 30 seconds until fragrant.",
      "Add vegetables and stir fry for 3-4 minutes until crisp-tender.",
      "Add soy sauce, honey, and rice vinegar. Toss to combine.",
      "Garnish with sesame seeds and serve immediately."
    ],
    nutritionInfo: "This stir fry is rich in plant-based protein from tofu and packed with vitamins from colorful vegetables. Ginger and garlic provide anti-inflammatory benefits."
  },
  {
    id: 5,
    title: "Vanilla Chia Overnight Oats",
    category: "breakfast",
    prepTime: "5 mins + overnight",
    calories: "420 calories",
    description: "Creamy overnight oats with chia seeds, vanilla, and fresh berries for a perfect breakfast.",
    image: "./photos/Overnight Oats with Berries.lpg.jpg",
    modalImage: "./photos/Vanilla Chia Overnight Oats.jpg",
    ingredients: [
      "1/2 cup rolled oats",
      "1 tbsp chia seeds",
      "1 cup almond milk",
      "1/2 tsp vanilla extract",
      "1 tbsp maple syrup or honey",
      "1/4 cup Greek yogurt",
      "Fresh berries for topping",
      "1 tbsp chopped nuts"
    ],
    instructions: [
      "In a jar or container, combine oats, chia seeds, almond milk, vanilla, and maple syrup.",
      "Stir well to combine all ingredients.",
      "Seal the container and refrigerate overnight or for at least 8 hours.",
      "In the morning, stir in Greek yogurt.",
      "Top with fresh berries and chopped nuts before serving."
    ],
    nutritionInfo: "These overnight oats provide sustained energy from complex carbs, fiber from chia seeds, and protein from Greek yogurt. Perfect for busy mornings."
  },
  {
    id: 6,
    title: "Mediterranean Hummus Bowl",
    category: "lunch",
    prepTime: "15 mins",
    calories: "390 calories",
    description: "Creamy hummus topped with roasted vegetables, olives, and feta cheese with pita bread.",
    image: "./photos/Mediterranean Hummus Bowl.jpg",
    modalImage: "./photos/Mediterranean Hummus Bowl.jpg",
    ingredients: [
      "1 cup hummus",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, diced",
      "1/2 red onion, thinly sliced",
      "1/2 cup kalamata olives",
      "1/4 cup feta cheese, crumbled",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "Fresh parsley, chopped",
      "Whole wheat pita bread"
    ],
    instructions: [
      "Spread hummus evenly on the bottom of two bowls.",
      "Arrange tomatoes, cucumber, red onion, and olives over the hummus.",
      "Sprinkle with crumbled feta cheese.",
      "Drizzle with olive oil and lemon juice.",
      "Garnish with fresh parsley.",
      "Serve with warm pita bread on the side."
    ],
    nutritionInfo: "This bowl is rich in plant-based protein from hummus, healthy fats from olive oil, and antioxidants from fresh vegetables. A complete Mediterranean-inspired meal."
  },
  {
    id: 7,
    title: "Lemon Herb Quinoa Salad",
    category: "lunch",
    prepTime: "25 mins",
    calories: "310 calories",
    description: "A light and refreshing salad with quinoa, fresh herbs, cherry tomatoes, and lemon dressing.",
    image: "./photos/quiona salad.jpg",
    modalImage: "./photos/quiona salad.jpg",
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups vegetable broth",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, diced",
      "1/4 cup red onion, finely diced",
      "1/4 cup fresh parsley, chopped",
      "2 tbsp fresh mint, chopped",
      "3 tbsp olive oil",
      "2 tbsp lemon juice",
      "1 tsp lemon zest",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook quinoa in vegetable broth according to package instructions. Let cool.",
      "In a large bowl, combine cooled quinoa with tomatoes, cucumber, and red onion.",
      "Add fresh herbs and toss gently.",
      "In a small bowl, whisk together olive oil, lemon juice, lemon zest, salt, and pepper.",
      "Pour dressing over salad and toss to combine.",
      "Refrigerate for at least 30 minutes before serving to allow flavors to meld."
    ],
    nutritionInfo: "This refreshing salad is packed with complete protein from quinoa, antioxidants from fresh herbs, and hydration from cucumber. Perfect for warm weather."
  },
  {
    id: 8,
    title: "Garden Vegetable Pizza",
    category: "dinner",
    prepTime: "30 mins",
    calories: "380 calories",
    description: "Whole wheat crust topped with tomato sauce, mozzarella, and a variety of fresh vegetables.",
    image: "./photos/veg pizza.jpg",
    modalImage: "./photos/veg pizza.jpg",
    ingredients: [
      "1 whole wheat pizza crust",
      "1/2 cup tomato sauce",
      "1 cup mozzarella cheese, shredded",
      "1 bell pepper, sliced",
      "1/2 red onion, sliced",
      "1 cup mushrooms, sliced",
      "1/2 cup black olives, sliced",
      "1 tbsp olive oil",
      "1 tsp dried oregano",
      "Fresh basil for garnish"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Place pizza crust on a baking sheet.",
      "Spread tomato sauce evenly over the crust.",
      "Sprinkle with mozzarella cheese.",
      "Arrange vegetables on top of the cheese.",
      "Drizzle with olive oil and sprinkle with oregano.",
      "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
      "Garnish with fresh basil before serving."
    ],
    nutritionInfo: "This veggie-packed pizza provides fiber from whole wheat crust, calcium from cheese, and various vitamins from colorful vegetables. Lighter than traditional pizza."
  },
  {
    id: 9,
    title: "Herb Baked Salmon",
    category: "dinner",
    prepTime: "25 mins",
    calories: "420 calories",
    description: "Salmon fillets baked with fresh herbs, lemon, and served with roasted vegetables.",
    image: "./photos/salmon and veggies.jpg",
    modalImage: "./photos/salmon and veggies.jpg",
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 tbsp fresh dill, chopped",
      "1 tbsp fresh parsley, chopped",
      "1 tsp lemon zest",
      "1 tbsp lemon juice",
      "Salt and pepper to taste",
      "Lemon slices for garnish"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Place salmon fillets on a baking sheet lined with parchment paper.",
      "In a small bowl, mix olive oil, garlic, dill, parsley, lemon zest, and lemon juice.",
      "Brush the herb mixture over the salmon fillets.",
      "Season with salt and pepper.",
      "Bake for 12-15 minutes until salmon flakes easily with a fork.",
      "Garnish with lemon slices before serving."
    ],
    nutritionInfo: "Salmon is rich in omega-3 fatty acids, which support heart and brain health. This recipe provides high-quality protein and essential nutrients with minimal preparation."
  },
  {
    id: 10,
    title: "Quinoa Stuffed Bell Peppers",
    category: "dinner",
    prepTime: "40 mins",
    calories: "320 calories",
    description: "Colorful bell peppers stuffed with quinoa, black beans, corn, and spices, then baked to perfection.",
    image: "./photos/Quinoa Stuffed Bell Pepper.jpg",
    modalImage: "./photos/Quinoa Stuffed Bell Pepper.jpg",
    ingredients: [
      "4 bell peppers (any color)",
      "1 cup quinoa, rinsed",
      "2 cups vegetable broth",
      "1 cup black beans, rinsed",
      "1 cup corn kernels",
      "1/2 cup tomato sauce",
      "1 tsp cumin",
      "1 tsp chili powder",
      "1/2 cup shredded cheese (optional)",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Cut tops off bell peppers and remove seeds.",
      "Cook quinoa in vegetable broth according to package instructions.",
      "In a large bowl, mix cooked quinoa with black beans, corn, tomato sauce, cumin, and chili powder.",
      "Stuff the mixture into the bell peppers.",
      "Place in a baking dish and add 1/4 cup water to the bottom.",
      "Bake for 25-30 minutes until peppers are tender.",
      "If using cheese, sprinkle on top and bake for additional 5 minutes.",
      "Garnish with fresh cilantro before serving."
    ],
    nutritionInfo: "These stuffed peppers provide complete protein from quinoa and beans, fiber, and a variety of vitamins from the colorful vegetables. A satisfying plant-based meal."
  },
  {
    id: 11,
    title: "Date & Nut Energy Balls",
    category: "snack",
    prepTime: "15 mins",
    calories: "90 calories each",
    description: "No-bake energy balls made with dates, nuts, and coconut for a quick and healthy snack.",
    image: "./photos/energy bites.jpg",
    modalImage: "./photos/energy bites.jpg",
    ingredients: [
      "1 cup Medjool dates, pitted",
      "1 cup raw almonds",
      "1/2 cup rolled oats",
      "2 tbsp chia seeds",
      "2 tbsp cocoa powder",
      "1 tbsp honey or maple syrup",
      "1/2 tsp vanilla extract",
      "Pinch of sea salt",
      "Shredded coconut for rolling (optional)"
    ],
    instructions: [
      "Place dates in a food processor and pulse until they form a paste.",
      "Add almonds, oats, chia seeds, cocoa powder, honey, vanilla, and salt.",
      "Process until the mixture comes together and is well combined.",
      "If the mixture is too dry, add a teaspoon of water.",
      "Roll into 1-inch balls.",
      "If desired, roll balls in shredded coconut.",
      "Refrigerate for at least 30 minutes to firm up.",
      "Store in an airtight container in the refrigerator for up to 2 weeks."
    ],
    nutritionInfo: "These energy balls provide natural sweetness from dates, healthy fats from nuts, and fiber from oats and chia seeds. A perfect healthy snack for sustained energy."
  },
  {
    id: 12,
    title: "Whole Grain Pancakes",
    category: "breakfast",
    prepTime: "20 mins",
    calories: "350 calories",
    description: "Fluffy whole grain pancakes topped with fresh berries and a drizzle of maple syrup.",
    image: "./photos/Whole Grain Pancakes.jpg",
    modalImage: "./photos/Whole Grain Pancakes.jpg",
    ingredients: [
      "1 cup whole wheat flour",
      "1 tbsp baking powder",
      "1/2 tsp cinnamon",
      "1/4 tsp salt",
      "1 cup milk (dairy or plant-based)",
      "1 egg",
      "2 tbsp maple syrup",
      "1 tbsp coconut oil, melted",
      "1 tsp vanilla extract",
      "Fresh berries for serving"
    ],
    instructions: [
      "In a large bowl, whisk together flour, baking powder, cinnamon, and salt.",
      "In another bowl, beat the egg, then add milk, maple syrup, coconut oil, and vanilla.",
      "Pour wet ingredients into dry ingredients and stir until just combined.",
      "Heat a non-stick pan over medium heat.",
      "Pour 1/4 cup batter for each pancake.",
      "Cook until bubbles form on the surface, then flip and cook until golden.",
      "Serve with fresh berries and a drizzle of maple syrup."
    ],
    nutritionInfo: "These pancakes provide complex carbohydrates from whole grains, protein from eggs and milk, and natural sweetness. A healthier alternative to traditional pancakes."
  },
  {
    id: 13,
    title: "Harvest Buddha Bowl",
    category: "lunch",
    prepTime: "30 mins",
    calories: "410 calories",
    description: "A nourishing bowl with roasted sweet potatoes, chickpeas, kale, and tahini dressing.",
    image: "./photos/Sweet Potato Buddha Bowl.jpg",
    modalImage: "./photos/Sweet Potato Buddha Bowl.jpg",
    ingredients: [
      "1 sweet potato, cubed",
      "1 cup chickpeas, rinsed",
      "2 cups kale, chopped",
      "1/2 cup quinoa, cooked",
      "1 avocado, sliced",
      "2 tbsp olive oil",
      "1 tsp smoked paprika",
      "1/2 tsp garlic powder",
      "2 tbsp tahini",
      "1 tbsp lemon juice",
      "1 tsp maple syrup"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Toss sweet potato cubes with 1 tbsp olive oil, smoked paprika, and garlic powder.",
      "Spread on a baking sheet and roast for 20-25 minutes until tender.",
      "In a bowl, massage kale with remaining olive oil to soften.",
      "In a small bowl, whisk together tahini, lemon juice, maple syrup, and 2-3 tbsp water to make dressing.",
      "Divide quinoa between two bowls.",
      "Top with roasted sweet potatoes, chickpeas, and massaged kale.",
      "Add avocado slices and drizzle with tahini dressing."
    ],
    nutritionInfo: "This nourishing bowl provides complex carbs from sweet potatoes, plant-based protein from chickpeas, healthy fats from avocado, and essential vitamins from kale."
  },
  {
    id: 14,
    title: "Creamy Mushroom Pasta",
    category: "dinner",
    prepTime: "25 mins",
    calories: "480 calories",
    description: "Whole wheat pasta with a creamy mushroom sauce made from cashews and nutritional yeast.",
    image: "./photos/pasta.jpg",
    modalImage: "./photos/pasta.jpg",
    ingredients: [
      "8 oz whole wheat pasta",
      "2 cups mushrooms, sliced",
      "2 cloves garlic, minced",
      "1/2 cup cashews, soaked",
      "1 cup vegetable broth",
      "2 tbsp nutritional yeast",
      "1 tbsp olive oil",
      "1 tsp thyme",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "Heat olive oil in a pan and sauté mushrooms until golden.",
      "Add garlic and cook for 1 minute until fragrant.",
      "Drain soaked cashews and blend with vegetable broth and nutritional yeast until smooth.",
      "Add cashew cream to the mushrooms and simmer for 5 minutes.",
      "Add cooked pasta to the sauce and toss to combine.",
      "Season with thyme, salt, and pepper.",
      "Garnish with fresh parsley before serving."
    ],
    nutritionInfo: "This dairy-free pasta dish provides complex carbs from whole wheat pasta, protein from cashews, and B vitamins from nutritional yeast. A comforting yet healthy meal."
  },
  {
    id: 15,
    title: "Rainbow Veggie Wraps",
    category: "snack",
    prepTime: "15 mins",
    calories: "190 calories",
    description: "Collard green wraps filled with hummus and colorful vegetables for a crunchy, fresh snack.",
    image: "./photos/veggie wrap.image.jpeg",
    modalImage: "./photos/veggie wrap.image.jpeg",
    ingredients: [
      "2 large collard green leaves",
      "1/2 cup hummus",
      "1/2 carrot, julienned",
      "1/2 bell pepper, sliced",
      "1/4 cucumber, julienned",
      "1/4 avocado, sliced",
      "2 tbsp sprouts",
      "1 tbsp lemon juice",
      "Fresh herbs (mint, basil)"
    ],
    instructions: [
      "Lay collard green leaves flat on a cutting board.",
      "Spread hummus evenly over each leaf.",
      "Layer vegetables horizontally across the center of each leaf.",
      "Sprinkle with lemon juice and fresh herbs.",
      "Fold in the sides and roll tightly from the bottom.",
      "Slice in half diagonally and serve immediately."
    ],
    nutritionInfo: "These wraps are packed with fiber from vegetables, plant-based protein from hummus, and essential nutrients. A refreshing, crunchy, and satisfying snack or light meal."
  },
  {
    id: 16,
    title: "Cinnamon French Toast",
    category: "breakfast",
    prepTime: "20 mins",
    calories: "380 calories",
    description: "Whole grain bread dipped in cinnamon batter and cooked to golden perfection.",
    image: "./photos/Cinnamon French Toast.jpg",
    modalImage: "./photos/Cinnamon French Toast.jpg",
    ingredients: [
      "4 slices whole grain bread",
      "2 eggs",
      "1/2 cup milk",
      "1 tsp cinnamon",
      "1/2 tsp vanilla extract",
      "Pinch of nutmeg",
      "1 tbsp coconut oil",
      "Fresh berries for serving",
      "Maple syrup for drizzling"
    ],
    instructions: [
      "In a shallow bowl, whisk together eggs, milk, cinnamon, vanilla, and nutmeg.",
      "Dip each slice of bread into the egg mixture, coating both sides.",
      "Heat coconut oil in a non-stick pan over medium heat.",
      "Cook bread for 3-4 minutes on each side until golden brown.",
      "Serve with fresh berries and a drizzle of maple syrup."
    ],
    nutritionInfo: "This French toast provides protein from eggs, complex carbs from whole grain bread, and antioxidants from berries. A satisfying breakfast that feels indulgent but is actually nutritious."
  },
  {
    id: 17,
    title: "Coconut Vegetable Curry",
    category: "dinner",
    prepTime: "35 mins",
    calories: "390 calories",
    description: "A fragrant curry with seasonal vegetables simmered in coconut milk and spices.",
    image: "./photos/Coconut Vegetable Curry.jpg",
    modalImage: "./photos/Coconut Vegetable Curry.jpg",
    ingredients: [
      "1 tbsp coconut oil",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "2 tbsp curry powder",
      "1 can (14 oz) coconut milk",
      "2 cups mixed vegetables (broccoli, bell peppers, carrots)",
      "1 cup chickpeas, rinsed",
      "1 cup vegetable broth",
      "1 tbsp lime juice",
      "Fresh cilantro for garnish",
      "Cooked brown rice for serving"
    ],
    instructions: [
      "Heat coconut oil in a large pot over medium heat.",
      "Add onion and cook until softened, about 5 minutes.",
      "Add garlic, ginger, and curry powder. Cook for 1 minute until fragrant.",
      "Add vegetables and cook for 3-4 minutes.",
      "Pour in coconut milk and vegetable broth. Bring to a simmer.",
      "Add chickpeas and simmer for 15-20 minutes until vegetables are tender.",
      "Stir in lime juice and season with salt to taste.",
      "Garnish with fresh cilantro and serve over brown rice."
    ],
    nutritionInfo: "This curry provides healthy fats from coconut milk, plant-based protein from chickpeas, and a variety of vitamins from the vegetables. Anti-inflammatory spices support overall health."
  },
  {
    id: 18,
    title: "Creamy Tomato Soup",
    category: "lunch",
    prepTime: "30 mins",
    calories: "220 calories",
    description: "Creamy tomato soup made with fresh tomatoes and basil, served with whole grain croutons.",
    image: "./photos/Creamy Tomato Soup.jpg",
    modalImage: "./photos/Creamy Tomato Soup.jpg",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "2 cans (28 oz total) crushed tomatoes",
      "2 cups vegetable broth",
      "1/2 cup cashews, soaked",
      "1 tsp dried basil",
      "1 tsp dried oregano",
      "Salt and pepper to taste",
      "Fresh basil for garnish"
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion and cook until softened, about 5 minutes.",
      "Add garlic and cook for 1 minute until fragrant.",
      "Add crushed tomatoes, vegetable broth, basil, and oregano.",
      "Bring to a simmer and cook for 15 minutes.",
      "Drain soaked cashews and blend with 1/2 cup water until smooth.",
      "Add cashew cream to the soup and blend until smooth (or use immersion blender).",
      "Season with salt and pepper to taste.",
      "Garnish with fresh basil before serving."
    ],
    nutritionInfo: "This dairy-free tomato soup is rich in lycopene from tomatoes, healthy fats from cashews, and flavor from herbs. A comforting and nutritious meal that supports heart health."
  },
  {
    id: 19,
    title: "Tropical Smoothie Bowl",
    category: "snack",
    prepTime: "10 mins",
    calories: "320 calories",
    description: "A thick smoothie bowl topped with tropical fruits, coconut, and granola.",
    image: "./photos/Green Smoothie Bow.png",
    modalImage: "./photos/Green Smoothie Bow.png",
    ingredients: [
      "1 cup frozen mango",
      "1/2 cup frozen pineapple",
      "1/2 banana",
      "1/4 cup coconut milk",
      "1 tbsp protein powder (optional)",
      "2 tbsp granola",
      "1 tbsp shredded coconut",
      "1 tbsp chia seeds",
      "Sliced kiwi and banana for topping"
    ],
    instructions: [
      "In a blender, combine frozen mango, pineapple, banana, coconut milk, and protein powder if using.",
      "Blend until thick and smooth, adding more liquid if needed.",
      "Pour into a bowl and top with granola, shredded coconut, chia seeds, and fruit.",
      "Serve immediately."
    ],
    nutritionInfo: "This tropical bowl provides vitamin C from mango and pineapple, healthy fats from coconut, and fiber from toppings. A refreshing and nutrient-dense snack or light meal."
  },
  {
    id: 20,
    title: "Vegetable Lasagna",
    category: "dinner",
    prepTime: "60 mins",
    calories: "420 calories",
    description: "Layers of pasta, ricotta, spinach, and zucchini baked with marinara sauce and cheese.",
    image: "./photos/Vegetable Lasagna.jpg",
    modalImage: "./photos/Vegetable Lasagna.jpg",
    ingredients: [
      "9 lasagna noodles",
      "2 cups spinach",
      "1 zucchini, sliced",
      "1 cup mushrooms, sliced",
      "2 cups marinara sauce",
      "2 cups ricotta cheese",
      "1 cup mozzarella cheese, shredded",
      "1/4 cup Parmesan cheese, grated",
      "1 egg",
      "2 cloves garlic, minced",
      "1 tsp dried basil",
      "1 tsp dried oregano"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Cook lasagna noodles according to package instructions.",
      "In a bowl, mix ricotta, egg, garlic, basil, and oregano.",
      "Spread 1/2 cup marinara sauce in a baking dish.",
      "Layer 3 noodles, 1/3 of ricotta mixture, vegetables, and sauce.",
      "Repeat layers twice more.",
      "Top with mozzarella and Parmesan cheeses.",
      "Cover with foil and bake for 30 minutes.",
      "Remove foil and bake for additional 15 minutes until cheese is golden.",
      "Let rest for 10 minutes before serving."
    ],
    nutritionInfo: "This vegetable lasagna provides protein from cheeses, vitamins from vegetables, and complex carbs from pasta. A comforting meal that's packed with nutrients."
  }
];

// Function to render recipe cards
function renderRecipes() {
  const recipesGrid = document.getElementById('recipes-grid');
  recipesGrid.innerHTML = '';
  
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';
    recipeCard.setAttribute('data-category', recipe.category);
    recipeCard.onclick = () => openModal(`modal${recipe.id}`);
    
    recipeCard.innerHTML = `
      <div class="recipe-image">
        <img src="${recipe.image}" alt="${recipe.title}">
      </div>
      <div class="recipe-info">
        <span class="recipe-category">${recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}</span>
        <h3 class="recipe-title">${recipe.title}</h3>
        <div class="recipe-meta">
          <span>${recipe.prepTime}</span>
          <span>${recipe.calories}</span>
        </div>
        <p class="recipe-description">${recipe.description}</p>
      </div>
    `;
    
    recipesGrid.appendChild(recipeCard);
  });
}

// Function to render modals
function renderModals() {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.innerHTML = '';
  
  recipes.forEach(recipe => {
    const modal = document.createElement('div');
    modal.id = `modal${recipe.id}`;
    modal.className = 'modal';
    
    // Create ingredients list HTML
    const ingredientsList = recipe.ingredients.map(ingredient => 
      `<li>${ingredient}</li>`
    ).join('');
    
    // Create instructions list HTML
    const instructionsList = recipe.instructions.map((instruction, index) => 
      `<li>${instruction}</li>`
    ).join('');
    
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-image">
            <img src="${recipe.modalImage}" alt="${recipe.title}">
          </div>
          <span class="close-modal" onclick="closeModal('modal${recipe.id}')">&times;</span>
        </div>
        <div class="modal-body">
          <h2 class="modal-title">${recipe.title}</h2>
          <div class="modal-meta">
            <div><strong>Prep Time:</strong> ${recipe.prepTime}</div>
            <div><strong>Calories:</strong> ${recipe.calories}</div>
            <div><strong>Category:</strong> ${recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}</div>
          </div>
          
          <div class="modal-section">
            <h3>Ingredients</h3>
            <ul class="ingredients-list">
              ${ingredientsList}
            </ul>
          </div>
          
          <div class="modal-section">
            <h3>Instructions</h3>
            <ol class="instructions-list">
              ${instructionsList}
            </ol>
          </div>
          
          <div class="modal-section">
            <h3>Nutrition Information</h3>
            <p>${recipe.nutritionInfo}</p>
          </div>
        </div>
      </div>
    `;
    
    modalContainer.appendChild(modal);
  });
}

// Modal functionality
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
}

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const recipeCards = document.querySelectorAll('.recipe-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      recipeCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// Search functionality
function searchRecipes() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const recipeCards = document.querySelectorAll('.recipe-card');
  
  recipeCards.forEach(card => {
    const title = card.querySelector('.recipe-title').textContent.toLowerCase();
    const description = card.querySelector('.recipe-description').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Allow pressing Enter to search
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchRecipes();
  }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  renderRecipes();
  renderModals();
});