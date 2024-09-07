// script.js
const allergens = [
    { name: "Almond", allergen: true, allergenInfo: { name: "Nut Allergy", description: "Almonds can cause allergic reactions in people with nut allergies." }},
    { name: "Apple", allergen: true, allergenInfo: { name: "Oral Allergy Syndrome", description: "Apples can cause oral allergy syndrome in people sensitive to birch pollen." }},
    { name: "Apricot", allergen: true, allergenInfo: { name: "Stone Fruit Allergy", description: "Stone fruits like apricots can cause allergic reactions in some individuals." }},
    { name: "Artichoke", allergen: true, allergenInfo: { name: "Insulin Allergy", description: "Artichokes can trigger allergic reactions in people with insulin sensitivity issues." }},
    { name: "Asparagus", allergen: true, allergenInfo: { name: "Allium Allergy", description: "Asparagus contains compounds that can cause allergic reactions in people sensitive to alliums." }},
    { name: "Avocado", allergen: false, allergenInfo: { name: "Oral Allergy Syndrome", description: "Avocados can cause symptoms in people with latex allergies or oral allergy syndrome." }},
    { name: "Bamboo shoot", allergen: true, allergenInfo: { name: "Histamine Allergy", description: "Bamboo shoots can cause histamine reactions in sensitive individuals." }},
    { name: "Banana", allergen: true, allergenInfo: { name: "Banana Allergy", description: "Bananas can cause allergic reactions in some people, including itching and swelling." }},
    { name: "Barley", allergen: true, allergenInfo: { name: "Gluten Allergy", description: "Barley contains gluten, which can cause celiac disease or gluten intolerance in some individuals." }},
    { name: "Bean", allergen: true, allergenInfo: { name: "Legume Allergy", description: "Beans can cause allergic reactions in people sensitive to legumes." }},
    { name: "Blackberry", allergen: false, allergenInfo: { name: "Salicylate Allergy", description: "Blackberries can trigger reactions in individuals with salicylate sensitivity." }},
    { name: "Black-eyed bean", allergen: true, allergenInfo: { name: "Legume Allergy", description: "Black-eyed beans are a type of legume that can cause allergic reactions in some people." }},
    { name: "Blueberry", allergen: false, allergenInfo: { name: "Salicylate Allergy", description: "Blueberries can be problematic for those with salicylate allergies." }},
    { name: "Bonito", allergen: true, allergenInfo: { name: "Histamine Allergy", description: "Bonito fish can cause histamine reactions in some people." }},
    { name: "Broad bean", allergen: true, allergenInfo: { name: "Legume Allergy", description: "Broad beans can cause allergic reactions in people sensitive to legumes." }},
    { name: "Broccoli", allergen: false, allergenInfo: { name: "Broccoli Allergy", description: "Broccoli can cause allergic reactions in some individuals, but it is generally safe for most people." }},
    { name: "Brussels sprouts", allergen: true, allergenInfo: { name: "Cruciferous Allergy", description: "Brussels sprouts are a cruciferous vegetable that can cause allergic reactions in some individuals." }},
    { name: "Buckwheat", allergen: true, allergenInfo: { name: "Gluten Allergy", description: "Buckwheat is gluten-free but can cause reactions in people with gluten allergies or intolerances." }},
    { name: "Burdock", allergen: true, allergenInfo: { name: "Ragweed Allergy", description: "Burdock can cause reactions in people with ragweed allergies." }},
    { name: "Butter", allergen: true, allergenInfo: { name: "Milk Allergy / Lactose Intolerance", description: "Butter contains milk proteins and lactose, which can cause allergies or intolerances." }},
    { name: "Butter bean", allergen: true, allergenInfo: { name: "Legume Allergy", description: "Butter beans are a type of legume that can cause allergic reactions in some individuals." }},
    { name: "Buttermilk", allergen: true, allergenInfo: { name: "Milk Allergy / Lactose Intolerance", description: "Buttermilk contains milk proteins and lactose, which can cause allergies or intolerances." }},
    { name: "Button mushroom", allergen: true, allergenInfo: { name: "Mushroom Allergy", description: "Button mushrooms can cause allergic reactions in some individuals." }},
    { name: "Cabbage", allergen: true, allergenInfo: { name: "Cruciferous Allergy", description: "Cabbage is a cruciferous vegetable that can cause allergic reactions in some people." }},
    { name: "Cacao bean", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Cacao beans are used to make chocolate, and while they can cause reactions in some, they are not a major allergen." }},
    { name: "Canola oil", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Canola oil is generally considered allergen-free for most people." }},
    { name: "Carrot", allergen: true, allergenInfo: { name: "Hypersensitivity", description: "Carrots can cause hypersensitivity reactions in some individuals." }},
    { name: "Casein", allergen: true, allergenInfo: { name: "Milk Allergy / Lactose Intolerance", description: "Casein is a milk protein that can cause allergic reactions in people with milk allergies." }},
    { name: "Cattle", allergen: true, allergenInfo: { name: "Alpha-gal Syndrome", description: "Cattle meat can cause alpha-gal syndrome, which is an allergy to red meat." }},
    { name: "Cauliflower", allergen: true, allergenInfo: { name: "Cruciferous Allergy", description: "Cauliflower can cause allergic reactions in some people due to its cruciferous nature." }},
    { name: "Celery", allergen: true, allergenInfo: { name: "Hypersensitivity", description: "Celery can cause hypersensitivity reactions in some individuals." }},
    { name: "Cheese", allergen: true, allergenInfo: { name: "Milk Allergy / Lactose Intolerance", description: "Cheese contains milk proteins and lactose, which can cause allergies or intolerances." }},
    { name: "Cherry", allergen: true, allergenInfo: { name: "Stone Fruit Allergy", description: "Cherries are a stone fruit that can cause allergic reactions in some people." }},
    { name: "Chestnut", allergen: true, allergenInfo: { name: "Nut Allergy", description: "Chestnuts can cause allergic reactions in people with nut allergies." }},
    { name: "Chicken", allergen: true, allergenInfo: { name: "Poultry Allergy", description: "Chicken can cause allergic reactions in some individuals sensitive to poultry." }},
    { name: "Chicory", allergen: true, allergenInfo: { name: "Insulin Allergy", description: "Chicory can trigger allergic reactions in people with insulin sensitivity." }},
    { name: "Chinese cabbage", allergen: true, allergenInfo: { name: "Cruciferous Allergy", description: "Chinese cabbage is a cruciferous vegetable that can cause allergic reactions in some individuals." }},
    { name: "Coconut oil", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Coconut oil is generally considered allergen-free for most people." }},
    { name: "Coffee bean", allergen: true, allergenInfo: { name: "Ochratoxin Allergy", description: "Coffee beans can contain ochratoxins, which may cause allergic reactions in sensitive individuals." }},
    { name: "Corn", allergen: true, allergenInfo: { name: "Corn Allergy", description: "Corn can cause allergic reactions in some people." }},
    { name: "Corn oil", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Corn oil is generally considered allergen-free for most people." }},
    { name: "Cotton seed", allergen: true, allergenInfo: { name: "Seed Allergy", description: "Cotton seeds can cause allergic reactions in people sensitive to seeds." }},
    { name: "Cranberry", allergen: false, allergenInfo: { name: "Salicylate Allergy", description: "Cranberries can trigger reactions in individuals with salicylate allergies." }},
    { name: "Cream", allergen: true, allergenInfo: { name: "Milk Allergy / Lactose Intolerance", description: "Cream contains milk proteins and lactose, which can cause allergies or intolerances." }},
    { name: "Crustaceans", allergen: true, allergenInfo: { name: "Shellfish Allergy", description: "Crustaceans can cause severe allergic reactions in some people." }},
    { name: "Cucumber", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Cucumbers are generally allergen-free for most people." }},
    { name: "Custard", allergen: true, allergenInfo: { name: "Milk Allergy / Lactose Intolerance", description: "Custard contains milk proteins and lactose, which can cause allergies or intolerances." }},
    { name: "Date", allergen: false, allergenInfo: { name: "Oral Allergy Syndrome", description: "Dates can cause oral allergy syndrome in people sensitive to birch pollen." }},
    { name: "Deer", allergen: true, allergenInfo: { name: "Alpha-gal Syndrome", description: "Deer meat can cause alpha-gal syndrome, which is an allergy to red meat." }},
    { name: "Duck", allergen: true, allergenInfo: { name: "Poultry Allergy", description: "Duck can cause allergic reactions in some individuals sensitive to poultry." }},
    { name: "Eel", allergen: true, allergenInfo: { name: "Fish Allergy", description: "Eel can cause allergic reactions in people with fish allergies." }},
    { name: "Egg plant", allergen: true, allergenInfo: { name: "Nightshade Allergy", description: "Eggplant is a nightshade vegetable that can cause allergic reactions in some individuals." }},
    { name: "Eggs", allergen: true, allergenInfo: { name: "Poultry Allergy", description: "Eggs can cause allergic reactions in some individuals sensitive to poultry products." }},
    { name: "Endive", allergen: true, allergenInfo: { name: "Insulin Allergy", description: "Endive can cause reactions in people with insulin allergies." }},
    { name: "Fructose", allergen: true, allergenInfo: { name: "Sugar Allergy / Intolerance", description: "Fructose intolerance can cause digestive problems for some people." }},
    { name: "Garlic", allergen: true, allergenInfo: { name: "Allium Allergy", description: "Garlic can cause allergic reactions in some people sensitive to alliums." }},
    { name: "Ghrkin", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Ghrkin is generally allergen-free for most people." }},
    { name: "Ginger", allergen: true, allergenInfo: { name: "Histamine Allergy", description: "Ginger can cause histamine reactions in sensitive individuals." }},
    { name: "Ginkgo nut", allergen: true, allergenInfo: { name: "Nut Allergy", description: "Ginkgo nuts can cause allergic reactions in people with nut allergies." }},
    { name: "Globfish", allergen: true, allergenInfo: { name: "Fish Allergy", description: "Globfish can cause allergic reactions in people with fish allergies." }},
    { name: "Glucose", allergen: true, allergenInfo: { name: "Sugar Allergy / Intolerance", description: "Glucose intolerance can cause digestive issues in some people." }},
    { name: "Goat", allergen: true, allergenInfo: { name: "Alpha-gal Syndrome", description: "Goat meat can cause alpha-gal syndrome, which is an allergy to red meat." }},
    { name: "Grape", allergen: true, allergenInfo: { name: "LTP Allergy", description: "Grapes can cause reactions in people with LTP (lipid transfer protein) allergies." }},
    { name: "Grapefruit", allergen: true, allergenInfo: { name: "Citrus Allergy", description: "Grapefruits can cause allergic reactions in some individuals sensitive to citrus fruits." }},
    { name: "Grapeseed oil", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Grapeseed oil is generally considered allergen-free for most people." }},
    { name: "Green soybean", allergen: true, allergenInfo: { name: "Legume Allergy", description: "Green soybeans are a type of legume that can cause allergic reactions in sensitive individuals." }},
    { name: "Groundnut oil", allergen: true, allergenInfo: { name: "Peanut Allergy", description: "Groundnut oil contains peanuts, which can cause severe allergic reactions in some people." }},
    { name: "Guava", allergen: false, allergenInfo: { name: "Oral Allergy Syndrome", description: "Guava can cause oral allergy syndrome in people sensitive to birch pollen." }},
    { name: "Honey", allergen: true, allergenInfo: { name: "Honey Allergy", description: "Honey can cause allergic reactions in some individuals, especially those with pollen allergies." }},
    { name: "Hop", allergen: true, allergenInfo: { name: "Beer Allergy", description: "Hops are used in beer production and can cause allergic reactions in sensitive individuals." }},
    { name: "Horse", allergen: true, allergenInfo: { name: "Alpha-gal Syndrome", description: "Horse meat can cause alpha-gal syndrome, an allergy to red meat." }},
    { name: "Horse Mackerel", allergen: true, allergenInfo: { name: "Fish Allergy", description: "Horse mackerel can cause allergic reactions in people with fish allergies." }},
    { name: "Horseradish", allergen: true, allergenInfo: { name: "Cruciferous Allergy", description: "Horseradish is a cruciferous vegetable that can cause allergic reactions in some individuals." }},
    { name: "Huckleberry", allergen: false, allergenInfo: { name: "Salicylate Allergy", description: "Huckleberries can trigger reactions in people with salicylate allergies." }},
    { name: "Ice cream", allergen: true, allergenInfo: { name: "Milk Allergy / Lactose Intolerance", description: "Ice cream contains milk proteins and lactose, which can cause allergies or intolerances." }},
    { name: "Japanese pear", allergen: false, allergenInfo: { name: "Oral Allergy Syndrome", description: "Japanese pears can cause oral allergy syndrome in people sensitive to birch pollen." }},
    { name: "Japanese persimmon", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Japanese persimmons are generally considered allergen-free for most people." }},
    { name: "Japanese plum", allergen: true, allergenInfo: { name: "Stone Fruit Allergy", description: "Japanese plums can cause allergic reactions in some people." }},
    { name: "Kale", allergen: true, allergenInfo: { name: "Cruciferous Allergy", description: "Kale is a cruciferous vegetable that can cause allergic reactions in some individuals." }},
    { name: "Kidney bean", allergen: true, allergenInfo: { name: "Legume Allergy", description: "Kidney beans can cause allergic reactions in people sensitive to legumes." }},
    { name: "Kiwi", allergen: true, allergenInfo: { name: "Oral Allergy Syndrome", description: "Kiwi can cause oral allergy syndrome in individuals sensitive to birch pollen." }},
    { name: "Konjac", allergen: true, allergenInfo: { name: "Potato Allergy", description: "Konjac can trigger allergic reactions in people with potato allergies." }},
    { name: "Kyona", allergen: true, allergenInfo: { name: "Cruciferous Allergy", description: "Kyona is a cruciferous vegetable that can cause allergic reactions in some individuals." }},
    { name: "Lactose", allergen: true, allergenInfo: { name: "Lactose Intolerance", description: "Lactose intolerance can cause digestive issues for some people." }},
    { name: "Leek", allergen: true, allergenInfo: { name: "Allium Allergy", description: "Leeks contain compounds that can cause allergic reactions in people sensitive to alliums." }},
    { name: "Lemon", allergen: true, allergenInfo: { name: "Citrus Allergy", description: "Lemons can cause allergic reactions in people sensitive to citrus fruits." }},
    { name: "Lentil", allergen: true, allergenInfo: { name: "Legume Allergy", description: "Lentils are a type of legume that can cause allergic reactions in some individuals." }},
    { name: "Lettuce", allergen: true, allergenInfo: { name: "LTP Allergy", description: "Lettuce can cause LTP (lipid transfer protein) allergy reactions in some individuals." }},
    { name: "Lima bean", allergen: true, allergenInfo: { name: "Legume Allergy", description: "Lima beans are a type of legume that can cause allergic reactions in sensitive individuals." }},
    { name: "Lime", allergen: true, allergenInfo: { name: "Citrus Allergy", description: "Limes can cause allergic reactions in people sensitive to citrus fruits." }},
    { name: "Loquat", allergen: false, allergenInfo: { name: "Oral Allergy Syndrome", description: "Loquats can cause oral allergy syndrome in individuals sensitive to birch pollen." }},
    { name: "Mackerel", allergen: true, allergenInfo: { name: "Fish Allergy", description: "Mackerel can cause allergic reactions in people with fish allergies." }},
    { name: "Makuwauri melon", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Makuwauri melons are generally allergen-free for most people." }},
    { name: "Mango", allergen: true, allergenInfo: { name: "Oral Allergy Syndrome", description: "Mango can cause oral allergy syndrome in people sensitive to birch pollen." }},
    { name: "Melons", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Melons are generally allergen-free for most people." }},
    { name: "Milk", allergen: true, allergenInfo: { name: "Milk Allergy / Lactose Intolerance", description: "Milk contains proteins and lactose that can cause allergies or intolerances." }},
    { name: "Mineral water", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Mineral water is generally considered allergen-free for most people." }},
    { name: "Mitsuba", allergen: true, allergenInfo: { name: "Hypersensitivity", description: "Mitsuba can cause hypersensitivity reactions in some individuals." }},
    { name: "Mume plum", allergen: true, allergenInfo: { name: "Stone Fruit Allergy", description: "Mume plums can cause allergic reactions in some people." }},
    { name: "Mustard oil", allergen: true, allergenInfo: { name: "Mustard Allergy", description: "Mustard oil can cause allergic reactions in people sensitive to mustard." }},
    { name: "Mustard Spinach", allergen: true, allergenInfo: { name: "Cruciferous Allergy", description: "Mustard spinach is a cruciferous vegetable that can cause allergic reactions in some individuals." }},
    { name: "Nectarine", allergen: true, allergenInfo: { name: "Stone Fruit Allergy", description: "Nectarines are a stone fruit that can cause allergic reactions in some people." }},
    { name: "Nira", allergen: true, allergenInfo: { name: "Allium Allergy", description: "Nira can cause allergic reactions in people sensitive to alliums." }},
    { name: "Okra", allergen: true, allergenInfo: { name: "Histamine Allergy", description: "Okra can cause histamine reactions in sensitive individuals." }},
    { name: "Olive oil", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Olive oil is generally considered allergen-free for most people." }},
    { name: "Onion", allergen: true, allergenInfo: { name: "Allium Allergy", description: "Onions contain compounds that can cause allergic reactions in sensitive individuals." }},
    { name: "Orange", allergen: true, allergenInfo: { name: "Citrus Allergy", description: "Oranges can cause allergic reactions in people sensitive to citrus fruits." }},
    { name: "Orange pulp", allergen: true, allergenInfo: { name: "Citrus Allergy", description: "Orange pulp can cause allergic reactions in people sensitive to citrus fruits." }},
    { name: "Papaya", allergen: false, allergenInfo: { name: "Oral Allergy Syndrome", description: "Papaya can cause oral allergy syndrome in people sensitive to birch pollen." }},
    { name: "Parsley", allergen: true, allergenInfo: { name: "Hypersensitivity", description: "Parsley can cause hypersensitivity reactions in some individuals." }},
    { name: "Parsnip", allergen: true, allergenInfo: { name: "Hypersensitivity", description: "Parsnips can cause hypersensitivity reactions in some individuals." }},
    { name: "Passion fruit", allergen: false, allergenInfo: { name: "Oral Allergy Syndrome", description: "Passion fruit can cause oral allergy syndrome in people sensitive to birch pollen." }},
    { name: "Peach", allergen: true, allergenInfo: { name: "Stone Fruit Allergy", description: "Peaches are a stone fruit that can cause allergic reactions in some people." }},
    { name: "Peanut", allergen: true, allergenInfo: { name: "Peanut Allergy", description: "Peanuts can cause severe allergic reactions in some individuals." }},
    { name: "Pear", allergen: false, allergenInfo: { name: "Oral Allergy Syndrome", description: "Pears can cause oral allergy syndrome in people sensitive to birch pollen." }},
    { name: "Peas", allergen: true, allergenInfo: { name: "Legume Allergy", description: "Peas are a type of legume that can cause allergic reactions in sensitive individuals." }},
    { name: "Pecan", allergen: true, allergenInfo: { name: "Nut Allergy", description: "Pecans can cause allergic reactions in people with nut allergies." }},
    { name: "Pegia", allergen: true, allergenInfo: { name: "Legume Allergy", description: "Pegia is a type of legume that can cause allergic reactions in some people." }},
    { name: "Peppermint", allergen: true, allergenInfo: { name: "Mint Allergy", description: "Peppermint can cause allergic reactions in people sensitive to mint." }},
    { name: "Percifomes", allergen: true, allergenInfo: { name: "Fish Allergy", description: "Percifomes can cause allergic reactions in people with fish allergies." }},
    { name: "Pig", allergen: true, allergenInfo: { name: "Alpha-gal Syndrome", description: "Pig meat can cause alpha-gal syndrome, an allergy to red meat." }},
    { name: "Pineapple", allergen: false, allergenInfo: { name: "Oral Allergy Syndrome", description: "Pineapple can cause oral allergy syndrome in people sensitive to birch pollen." }},
    { name: "Popcorn", allergen: true, allergenInfo: { name: "Corn Allergy", description: "Popcorn contains corn and can cause allergic reactions in sensitive individuals." }},
    { name: "Potato", allergen: true, allergenInfo: { name: "Potato Allergy", description: "Potatoes can trigger allergic reactions in people with potato allergies." }},
    { name: "Quince", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Quince is generally considered allergen-free for most people." }},
    { name: "Radish", allergen: true, allergenInfo: { name: "Cruciferous Allergy", description: "Radishes are a cruciferous vegetable that can cause allergic reactions in some individuals." }},
    { name: "Raspberry", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Raspberries are generally allergen-free for most people." }},
    { name: "Red bean", allergen: true, allergenInfo: { name: "Legume Allergy", description: "Red beans are a type of legume that can cause allergic reactions in sensitive individuals." }},
    { name: "Rye", allergen: true, allergenInfo: { name: "Gluten Allergy", description: "Rye contains gluten, which can cause allergic reactions in people with gluten sensitivities." }},
    { name: "Sardine", allergen: true, allergenInfo: { name: "Fish Allergy", description: "Sardines can cause allergic reactions in individuals with fish allergies." }},
    { name: "Sea urchin", allergen: true, allergenInfo: { name: "Shellfish Allergy", description: "Sea urchin can cause severe allergic reactions in people sensitive to shellfish." }},
    { name: "Sesame seed", allergen: true, allergenInfo: { name: "Seed Allergy", description: "Sesame seeds can cause allergic reactions in some individuals." }},
    { name: "Shrimp", allergen: true, allergenInfo: { name: "Shellfish Allergy", description: "Shrimp can cause severe allergic reactions in people sensitive to shellfish." }},
    { name: "Soybean oil", allergen: true, allergenInfo: { name: "Soy Allergy", description: "Soybean oil can cause allergic reactions in people with soy allergies." }},
    { name: "Spinach", allergen: true, allergenInfo: { name: "Histamine Allergy", description: "Spinach can cause histamine reactions in sensitive individuals." }},
    { name: "Squid", allergen: true, allergenInfo: { name: "Shellfish Allergy", description: "Squid can cause allergic reactions in people with shellfish allergies." }},
    { name: "Strawberry", allergen: true, allergenInfo: { name: "Berry Allergy", description: "Strawberries can cause allergic reactions in some individuals sensitive to berries." }},
    { name: "Sunflower oil", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Sunflower oil is generally considered allergen-free for most people." }},
    { name: "Sweet corn", allergen: true, allergenInfo: { name: "Corn Allergy", description: "Sweet corn contains corn and can cause allergic reactions in sensitive individuals." }},
    { name: "Tamarind", allergen: true, allergenInfo: { name: "Tamarind Allergy", description: "Tamarind can cause allergic reactions in some individuals." }},
    { name: "Tea", allergen: true, allergenInfo: { name: "Caffeine Allergy", description: "Tea contains caffeine, which can cause allergic reactions in sensitive individuals." }},
    { name: "Tomato", allergen: true, allergenInfo: { name: "Nightshade Allergy", description: "Tomatoes are a nightshade vegetable that can cause allergic reactions in some individuals." }},
    { name: "Tuna", allergen: true, allergenInfo: { name: "Fish Allergy", description: "Tuna can cause allergic reactions in people with fish allergies." }},
    { name: "Turmeric", allergen: true, allergenInfo: { name: "Histamine Allergy", description: "Turmeric can cause histamine reactions in sensitive individuals." }},
    { name: "Vanilla", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Vanilla is generally considered allergen-free for most people." }},
    { name: "Walnut", allergen: true, allergenInfo: { name: "Nut Allergy", description: "Walnuts can cause allergic reactions in people with nut allergies." }},
    { name: "Watermelon", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Watermelons are generally allergen-free for most people." }},
    { name: "Wheat", allergen: true, allergenInfo: { name: "Gluten Allergy", description: "Wheat contains gluten, which can cause allergic reactions in people with gluten sensitivities." }},
    { name: "Yam", allergen: true, allergenInfo: { name: "Yam Allergy", description: "Yams can cause allergic reactions in some individuals." }},
    { name: "Yogurt", allergen: true, allergenInfo: { name: "Milk Allergy / Lactose Intolerance", description: "Yogurt contains milk proteins and lactose, which can cause allergies or intolerances." }},
    { name: "Zucchini", allergen: false, allergenInfo: { name: "No Significant Allergen", description: "Zucchinis are generally allergen-free for most people." }}
]
;

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;
let numQuestions = 5;
let difficulty = 'easy';

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('next-question').addEventListener('click', nextQuestion);
document.getElementById('restart-game').addEventListener('click', restartGame);

function startGame() {
    numQuestions = document.getElementById('num-questions').value;
    difficulty = document.getElementById('difficulty').value;

    questions = generateQuestions(numQuestions, difficulty);
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('game-settings').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('results-container').style.display = 'none';

    nextQuestion();
}

function generateQuestions(num, difficulty) {
    let shuffledAllergens = allergens.sort(() => 0.5 - Math.random());
    return shuffledAllergens.slice(0, num);
}

function nextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endGame();
        return;
    }

    document.getElementById('next-question').style.display = 'none';
    document.getElementById('description-container').innerHTML = '';

    let question = questions[currentQuestionIndex];
    document.getElementById('question-container').innerHTML = `
        <h3>Is ${question.name} an allergen?</h3>
        <button onclick="answerQuestion(true)">Yes</button>
        <button onclick="answerQuestion(false)">No</button>
    `;

    startTimer();
}

function startTimer() {
    timeLeft = 10;
    document.getElementById('timer').innerText = `Time Left: ${timeLeft}`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time Left: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            skipQuestion();
        }
    }, 1000);
}

function skipQuestion() {
    clearInterval(timer);
    document.getElementById('description-container').innerHTML = `
        <p>Time's up! The correct answer was: ${questions[currentQuestionIndex].allergen ? 'Yes' : 'No'}.</p>
        <p>${questions[currentQuestionIndex].allergenInfo.description}</p>
    `;
    document.getElementById('next-question').style.display = 'block';
    currentQuestionIndex++;
}

function answerQuestion(answer) {
    clearInterval(timer);

    let question = questions[currentQuestionIndex];
    if (answer === question.allergen) {
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
    }

    document.getElementById('description-container').innerHTML = `
        <p>The correct answer is: ${question.allergen ? 'Yes' : 'No'}.</p>
        <p>${question.allergenInfo.description}</p>
    `;

    document.getElementById('next-question').style.display = 'block';
    currentQuestionIndex++;
}

function endGame() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    document.getElementById('final-score').innerText = `You scored ${score} out of ${questions.length}!`;

    let allQuestionsHtml = questions.map((q, index) => `
        <p>Q${index + 1}: Is ${q.name} an allergen? ${q.allergen ? 'Yes' : 'No'}</p>
        <p>${q.allergenInfo.description}</p>
    `).join('');

    document.getElementById('all-questions').innerHTML = allQuestionsHtml;

    confetti();
}

function restartGame() {
    document.getElementById('game-settings').style.display = 'block';
    document.getElementById('results-container').style.display = 'none';
}

function confetti() {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
