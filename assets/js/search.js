export function filterDrinks() {
    //Vårt sökvärde
    const searchValue = document.getElementById('search').value.toLowerCase();
    
    //Hämtar alla rader från tabellen
    const rows = document.querySelectorAll('#dryck tr');
    
    //Går igenom varje rad
    for (let eachrow = 0; eachrow < rows.length; eachrow++) {
        const row = rows[eachrow];
        const drinkName = row.querySelector('td').innerText.toLowerCase();

        // Kontrollera om drycken börjar med det sökta värdet
        if (drinkName.startsWith(searchValue.toLowerCase())) {
            row.style.display = '';
        } else {
        row.style.display = 'none';
        }
    }
}
