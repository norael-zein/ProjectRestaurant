import {addInformation} from './addinfo.js';

let drinksList = [];

// Hämtar information om drinkar och deras bilder
export function getInformationName() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        drinksList = data.drinks.map(function(drink) {
            return {
                name: drink.strDrink,
                image: drink.strDrinkThumb
            };
        });
        for (let eachdrink = 0; eachdrink < drinksList.length; eachdrink++) {
            addInformation(drinksList[eachdrink].name, drinksList[eachdrink].image);
        }
    });
}

// Hämtar listan med drinkar
export function getDrinksList() {
    return drinksList.map(function(drink) {
        return drink.name;
    });
}

// Hämtar listan med bilder
export function getImageList() {
    return drinksList.map(function(drink) {
        return drink.image;
    });
}
