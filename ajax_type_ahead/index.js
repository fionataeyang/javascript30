const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
    .then( get => get.json())
    .then( data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter( place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch.toLowerCase(), 'gi');
        return place.city.match(regex) || place.state.match(regex) ;
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=\d{3})+(?!\d)/g, ',');
}

function displayMatch() {
    const matchArray = findMatches( this.value, cities);
    // console.log(matchArray);
    const li = matchArray.map( place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `<li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>`
    }).join('');
    suggestions.innerHTML = li;
    if (this.value == '') {suggestions.innerHTML = '';}
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatch);
searchInput.addEventListener('keyup', displayMatch);