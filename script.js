const allergyForm = document.getElementById('allergy-form');
const allergensResultDiv = document.getElementById('allergens-result');
const extractedTextContent = document.getElementById('extracted-text-content');
const ingredientImageInput = document.getElementById('ingredient-image');
const imageContainer = document.getElementById('image-container');
const ingredientImageDisplay = document.getElementById('ingredient-image-display');

const allergens = [];

const allergenDescriptions = {
    'almond': 'Nut Allergy: Allergic reactions to almonds can range from mild to severe, including anaphylaxis.',
    'apple': 'Oral Allergy Syndrome: Symptoms can include itching and swelling of the mouth and throat.',
    'apricot': 'Stone Fruit Allergy: Symptoms can include itching, swelling, and hives.',
    'artichoke': 'Insulin Allergy: Rare allergy causing symptoms like abdominal pain, diarrhea, and skin reactions.',
    'asparagus': 'Allium Allergy: Symptoms include digestive discomfort and skin reactions.',
    'avocado': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'bamboo shoot': 'Histamine Allergy: Symptoms include headaches, digestive issues, and skin rashes.',
    'banana': 'Banana Allergy: Symptoms can include skin rashes, digestive discomfort, and respiratory issues.',
    'barley': 'Gluten Allergy: Symptoms include digestive discomfort, skin rashes, and respiratory problems.',
    'bean': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'blackberry': 'Salicylate Allergy: Symptoms can include headaches, nasal congestion, and digestive issues.',
    'black-eyed bean': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'blueberry': 'Salicylate Allergy: Symptoms can include headaches, nasal congestion, and digestive issues.',
    'bonito': 'Histamine Allergy: Symptoms include headaches, digestive issues, and skin rashes.',
    'broad bean': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'broccoli': 'Broccoli Allergy: Can cause skin rashes and digestive discomfort.',
    'brussels sprouts': 'Cruciferous Allergy: Symptoms include digestive issues and skin rashes.',
    'buckwheat': 'Gluten Allergy: Symptoms include digestive discomfort, skin rashes, and respiratory problems.',
    'burdock': 'Ragweed Allergy: Can cause skin rashes, nasal congestion, and respiratory issues.',
    'butter': 'Milk Allergy / Lactose Intolerance: Can cause digestive issues, skin rashes, and respiratory problems.',
    'butter bean': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'buttermilk': 'Milk Allergy / Lactose Intolerance: Can cause digestive issues, skin rashes, and respiratory problems.',
    'button mushroom': 'Mushroom Allergy: Symptoms can include skin rashes and digestive discomfort.',
    'cabbage': 'Cruciferous Allergy: Allergic reactions to cabbage can include symptoms like itching, swelling, and digestive discomfort.',
    'cacao bean': 'Cacao Allergy: Symptoms may include skin rashes, headaches, and respiratory issues.',
    'canola oil': 'Canola Allergy: Reactions can include gastrointestinal issues and skin rashes.',
    'carrot': 'Hypersensitivity: Allergic reactions to carrots can cause oral allergy syndrome, including itching and swelling of the mouth and throat.',
    'casein': 'Milk Allergy / Lactose Intolerance: Reactions can range from digestive discomfort to anaphylaxis in severe milk allergies.',
    'cattle': 'Alpha-gal Syndrome: A tick-borne allergy to red meat causing delayed anaphylaxis.',
    'cauliflower': 'Cruciferous Allergy: Symptoms include digestive issues and skin rashes.',
    'celery': 'Hypersensitivity: Can cause severe allergic reactions including anaphylaxis.',
    'cheese': 'Milk Allergy / Lactose Intolerance: Can cause digestive issues, skin rashes, and respiratory problems.',
    'cherry': 'Stone Fruit Allergy: Symptoms can include itching, swelling, and hives.',
    'chestnut': 'Nut Allergy: Reactions can range from mild to severe, including anaphylaxis.',
    'chicken': 'Poultry Allergy: Symptoms can include skin rashes, gastrointestinal discomfort, and respiratory issues.',
    'chicory': 'Insulin Allergy: Rare allergy causing symptoms like abdominal pain, diarrhea, and skin reactions.',
    'chinese cabbage': 'Cruciferous Allergy: Symptoms include digestive issues and skin rashes.',
    'coconut oil': 'Coconut Allergy: Reactions can include skin rashes and gastrointestinal discomfort.',
    'coffee bean': 'Ochratoxin Allergy: May cause headaches, digestive issues, and skin rashes.',
    'corn': 'Corn Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'corn oil': 'Corn Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'cotton seed': 'Seed Allergy: Reactions can include skin rashes and digestive discomfort.',
    'cranberry': 'Salicylate Allergy: Symptoms can include headaches, nasal congestion, and digestive issues.',
    'cream': 'Milk Allergy / Lactose Intolerance: Can cause digestive issues, skin rashes, and respiratory problems.',
    'crustaceans': 'Shellfish Allergy: Symptoms can range from mild hives to severe anaphylaxis.',
    'cucumber': 'Cucumber Allergy: Can cause oral allergy syndrome with symptoms like itching and swelling.',
    'custard': 'Milk Allergy / Lactose Intolerance: Can cause digestive issues, skin rashes, and respiratory problems.',
    'date': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'deer': 'Alpha-gal Syndrome: A tick-borne allergy to red meat causing delayed anaphylaxis.',
    'duck': 'Poultry Allergy: Symptoms can include skin rashes, gastrointestinal discomfort, and respiratory issues.',
    'eel': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'egg plant': 'Nightshade Allergy: Symptoms include skin rashes and digestive discomfort.',
    'eggs': 'Poultry Allergy: Symptoms can include skin rashes, gastrointestinal discomfort, and respiratory issues.',
    'endive': 'Insulin Allergy: Rare allergy causing symptoms like abdominal pain, diarrhea, and skin reactions.',
    'fructose': 'Sugar Allergy / Intolerance: Can cause digestive issues and skin rashes.',
    'garlic': 'Allium Allergy: Symptoms include digestive discomfort and skin reactions.',
    'ghrkin': 'Cucumber Allergy: Can cause oral allergy syndrome with symptoms like itching and swelling.',
    'ginger': 'Histamine Allergy: Symptoms include headaches, digestive issues, and skin rashes.',
    'ginkgo nut': 'Nut Allergy: Reactions can range from mild to severe, including anaphylaxis.',
    'globfish': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'glucose': 'Sugar Allergy / Intolerance: Can cause digestive issues and skin rashes.',
    'goat': 'Alpha-gal Syndrome: A tick-borne allergy to red meat causing delayed anaphylaxis.',
    'grape': 'LTP Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'grapefruit': 'Citrus Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'grapeseed oil': 'Grapeseed Allergy: Can cause skin rashes and digestive discomfort.',
    'green soybean': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'groundnut oil': 'Peanut Allergy: Symptoms include skin rashes, digestive issues, and anaphylaxis.',
    'guava': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'honey': 'Honey Allergy: Can cause skin rashes, digestive issues, and respiratory problems.',
    'hop': 'Beer Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'horse': 'Alpha-gal Syndrome: A tick-borne allergy to red meat causing delayed anaphylaxis.',
    'horse mackerel': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'horseradish': 'Cruciferous Allergy: Symptoms include digestive issues and skin rashes.',
    'huckleberry': 'Salicylate Allergy: Symptoms can include headaches, nasal congestion, and digestive issues.',
    'ice cream': 'Milk Allergy / Lactose Intolerance: Can cause digestive issues, skin rashes, and respiratory problems.',
    'japanese pear': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'japanese persimmon': 'Persimmon Allergy: Can cause skin rashes and digestive discomfort.',
    'japanese plum': 'Stone Fruit Allergy: Symptoms can include itching, swelling, and hives.',
    'kale': 'Cruciferous Allergy: Symptoms include digestive issues and skin rashes.',
    'kidney bean': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'kiwi': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'konjac': 'Potato Allergy: Symptoms include skin rashes and digestive discomfort.',
    'kyona': 'Cruciferous Allergy: Symptoms include digestive issues and skin rashes.',
    'lactose': 'Lactose Intolerance: Can cause digestive issues like bloating, diarrhea, and gas.',
    'leek': 'Allium Allergy: Symptoms include digestive discomfort and skin reactions.',
    'lemon': 'Citrus Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'lentil': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'lettuce': 'LTP Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'lima bean': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'lime': 'Citrus Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'loquat': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'mackerel': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'makuwauri melon': 'Melon Allergy: Can cause skin rashes, digestive discomfort, and respiratory issues.',
    'mango': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'melons': 'Melon Allergy: Can cause skin rashes, digestive discomfort, and respiratory issues.',
    'milk': 'Milk Allergy / Lactose Intolerance: Can cause digestive issues, skin rashes, and respiratory problems.',
    'mineral water': 'Aquagenic Urticaria: A rare condition causing hives upon skin contact with water.',
    'mitsuba': 'Hypersensitivity: Can cause skin rashes and digestive discomfort.',
    'mume plum': 'Stone Fruit Allergy: Symptoms can include itching, swelling, and hives.',
    'mustard oil': 'Mustard Allergy: Symptoms include skin rashes and digestive issues.',
    'mustard spinach': 'Cruciferous Allergy: Symptoms include digestive issues and skin rashes.',
    'nectarine': 'Stone Fruit Allergy: Symptoms can include itching, swelling, and hives.',
    'nira': 'Allium Allergy: Symptoms include digestive discomfort and skin reactions.',
    'okra': 'Histamine Allergy: Symptoms include headaches, digestive issues, and skin rashes.',
    'olive oil': 'Olive Allergy: Can cause skin rashes and digestive discomfort.',
    'onion': 'Allium Allergy: Symptoms include digestive discomfort and skin reactions.',
    'orange': 'Citrus Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'orange pulp': 'Citrus Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'papaya': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'parsley': 'Hypersensitivity: Can cause skin rashes and digestive discomfort.',
    'parsnip': 'Hypersensitivity: Can cause skin rashes and digestive discomfort.',
    'passion fruit': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'peach': 'Stone Fruit Allergy: Symptoms can include itching, swelling, and hives.',
    'peanut': 'Peanut Allergy: Allergic reactions to peanuts can range from mild to severe, including anaphylaxis.',
    'pear': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'peas': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'pecan': 'Nut Allergy: Reactions can range from mild to severe, including anaphylaxis.',
    'pegia': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'peppermint': 'Mint Allergy: Symptoms can include skin rashes, digestive discomfort, and respiratory issues.',
    'percifomes': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'pig': 'Alpha-gal Syndrome: A tick-borne allergy to red meat causing delayed anaphylaxis.',
    'pineapple': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'popcorn': 'Corn Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'potato': 'Potato Allergy: Symptoms include skin rashes and digestive discomfort.',
    'prune': 'Stone Fruit Allergy: Symptoms can include itching, swelling, and hives.',
    'pumpkin': 'Pumpkin Allergy: Can cause skin rashes and digestive discomfort.',
    'qing-geng-cai': 'Cruciferous Allergy: Symptoms include digestive issues and skin rashes.',
    'quince': 'Oral Allergy Syndrome: Symptoms include itching and swelling of the mouth and throat.',
    'radish leaf': 'Radish Allergy: Can cause skin rashes and digestive discomfort.',
    'radish root': 'Hypersensitivity: Can cause skin rashes and digestive discomfort.',
    'rapeseed': 'Seed Allergy: Reactions can include skin rashes and digestive discomfort.',
    'raspberry': 'Salicylate Allergy: Symptoms can include headaches, nasal congestion, and digestive issues.',
    'rice': 'Rice Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'ricebran oil': 'Rice Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'royal jelly': 'Honey Allergy: Can cause skin rashes, digestive issues, and respiratory problems.',
    'rye': 'Gluten Allergy: Symptoms include digestive discomfort, skin rashes, and respiratory problems.',
    'safflower seed': 'Seed Allergy: Reactions can include skin rashes and digestive discomfort.',
    'salmon': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'salsify': 'Insulin Allergy: Rare allergy causing symptoms like abdominal pain, diarrhea, and skin reactions.',
    'sansho': 'Pepper Allergy: Symptoms can include skin rashes and digestive discomfort.',
    'sea bass': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'sea bream': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'sesame seed': 'Seed Allergy: Reactions can include skin rashes and digestive discomfort.',
    'shallot': 'Allium Allergy: Symptoms include digestive discomfort and skin reactions.',
    'sheep': 'Alpha-gal Syndrome: A tick-borne allergy to red meat causing delayed anaphylaxis.',
    'shelled mollusc': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'shiitake mushroom': 'Mushroom Allergy: Symptoms can include skin rashes and digestive discomfort.',
    'shungiku': 'Insulin Allergy: Rare allergy causing symptoms like abdominal pain, diarrhea, and skin reactions.',
    'sour cream': 'Milk Allergy / Lactose Intolerance: Can cause digestive issues, skin rashes, and respiratory problems.',
    'soybean': 'Soy Allergy: Symptoms can include skin rashes, digestive issues, and respiratory problems.',
    'spearmint': 'Mint Allergy: Symptoms can include skin rashes, digestive discomfort, and respiratory issues.',
    'spinach': 'Histamine Allergy: Symptoms include headaches, digestive issues, and skin rashes.',
    'squash': 'Squash Allergy: Can cause skin rashes and digestive discomfort.',
    'strawberry': 'Salicylate Allergy: Symptoms can include headaches, nasal congestion, and digestive issues.',
    'sugar': 'Sugar Allergy / Intolerance: Can cause digestive issues and skin rashes.',
    'sugar beet': 'Sugar Allergy / Intolerance: Can cause digestive issues and skin rashes.',
    'sugarcane': 'Sugar Allergy / Intolerance: Can cause digestive issues and skin rashes.',
    'sultani': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'sultapya': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'sunflower oil': 'Sunflower Allergy: Can cause skin rashes and digestive discomfort.',
    'sunflower seed': 'Seed Allergy: Reactions can include skin rashes and digestive discomfort.',
    'sweet corn': 'Corn Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'sweet pepper': 'Nightshade Allergy: Symptoms include skin rashes and digestive discomfort.',
    'sweet potato': 'Potato Allergy: Symptoms include skin rashes and digestive discomfort.',
    'taro': 'Potato Allergy: Symptoms include skin rashes and digestive discomfort.',
    'tea': 'Tannin Allergy: Symptoms include headaches, digestive issues, and skin rashes.',
    'tetraodontiformes': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'tomato': 'Nightshade Allergy: Symptoms include skin rashes and digestive discomfort.',
    'trout': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'tuna': 'Fish Allergy: Can cause skin rashes, digestive issues, and anaphylaxis.',
    'turkey': 'Poultry Allergy: Symptoms can include skin rashes, gastrointestinal discomfort, and respiratory issues.',
    'turnip leaf': 'Turnip Allergy: Can cause skin rashes and digestive discomfort.',
    'turnip root': 'Thyroid: Can interfere with thyroid function causing symptoms like fatigue and weight gain.',
    'vegetable oil': 'Vegetable Allergy: Can cause skin rashes and digestive discomfort.',
    'walnut': 'Nut Allergy: Reactions can range from mild to severe, including anaphylaxis.',
    'water melon': 'Melon Allergy: Can cause skin rashes, digestive discomfort, and respiratory issues.',
    'watercress': 'Watercress Allergy: Can cause skin rashes and digestive discomfort.',
    'welsh': 'Allium Allergy: Symptoms include digestive discomfort and skin reactions.',
    'wheat': 'Gluten Allergy: Symptoms include digestive discomfort, skin rashes, and respiratory problems.',
    'whey': 'Milk Allergy / Lactose Intolerance: Can cause digestive issues, skin rashes, and respiratory problems.',
    'white bean': 'Legume Allergy: Symptoms include skin rashes, digestive issues, and respiratory problems.',
    'yam': 'Potato Allergy: Symptoms include skin rashes and digestive discomfort.',
    'yogurt': 'Milk Allergy / Lactose Intolerance: Can cause digestive issues, skin rashes, and respiratory problems.'
};

allergyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    allergens.length = 0;

    const allergensInput = document.getElementById('allergens');
    allergens.push(...allergensInput.value.split(',').map((allergen) => allergen.trim().toLowerCase()));

    const file = ingredientImageInput.files[0];
    const text = await extractTextFromImage(file);
    const translatedText = await translateText(text);

    extractedTextContent.textContent = translatedText;

    const ingredients = translatedText.split('\n').map((ingredient) => ingredient.trim().toLowerCase());

    let message = '';

    for (const allergen of allergens) {
        for (const ingredient of ingredients) {
            if (ingredient.includes(allergen)) {
                message += `<div class="alert">${ingredient} contains ${allergen}`;
                if (allergenDescriptions[allergen]) {
                    message += `: ${allergenDescriptions[allergen]}`;
                }
                message += `</div>`;
                break;
            }
        }
    }

    if (message) {
        allergensResultDiv.innerHTML = message;
    } else {
        allergensResultDiv.innerHTML = `<div class="safe">Food is safe to consume</div>`;
    }

    ingredientImageDisplay.src = URL.createObjectURL(file);
    imageContainer.style.display = 'block';
});

async function extractTextFromImage(file) {
    const apiKey = 'K84784109788957';
    const apiUrl = 'https://api.ocr.space/parse/image';

    const formData = new FormData();
    formData.append('apikey', apiKey);
    formData.append('file', file);

    const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData
    });

    const data = await response.json();
    const text = data.ParsedResults[0].ParsedText;
    return text;
}

async function translateText(text) {
    const apiKey = '3ab2e517522735c31b0a';
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=auto|en`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Mashape-Key': apiKey
            }
        });

        const data = await response.json();
        return data.responseData.translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        return text;
    }
}
