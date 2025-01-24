import {getInformationName} from './getinfo.js';
import {filterDrinks} from './search.js';

window.addEventListener('load', main);

function main() {
    getInformationName();
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', filterDrinks);
}
