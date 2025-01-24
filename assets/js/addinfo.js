export function addInformation(singledrink, drinkImage) {
    //Skapa rader
    const tr = document.createElement('tr');

    //Skapar tabell för namn
    const tdName = document.createElement('td');
    tdName.innerText = singledrink;
    tr.appendChild(tdName);

    //Lägger till bilder
    const tdImage = document.createElement('td');
    const img = document.createElement('img');
    img.src = drinkImage;
    img.alt = singledrink;
    tdImage.appendChild(img);
    tr.appendChild(tdImage);

    //Lägger till våra rader och kolumner under #dryck-tabellen i html
    document.querySelector('#dryck').appendChild(tr);
}
