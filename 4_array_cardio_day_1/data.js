const inventors = [
    {first: 'Alber', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Gurie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 
'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
'Benchley, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 
'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergan, Ingmar', 'Berio, Luciano', 
'Berle, Milton', 'Berlin, Irving', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 
'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 
'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
// console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const fullNames = inventors.map( inventor => `${inventor.last} ${inventor.last}`);
// console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort( (firstPeople, secondPeople) => {
//     if (firstPeople.year < secondPeople.year) {
//         return 1;
//     } else {
//         return -1;
//     }
// }) 

// const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
const ordered = inventors.sort((a, b) => a.year > b.year); // < Sort large to small, > small to large
// console.table(ordered);
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// const totalYears = inventors.reduce( (total, inventor) => {return total + (inventor.passed - inventor.year) }, 0); // Teacher's code, 523
const totalYears = inventors.reduce( ((total, inventor) => total + (inventor.passed - inventor.year)), 0); // My code, 523
// console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort( (a, b) => (a.passed-a.year) < (b.passed-b.year));
// console.table(oldest);

// 6.create a list of boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links.map(link => link.textContent)
//                 .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name 
const alpha = people.sort( (lastOne, nextOne)=> {
    const [aFirst, aLast] = lastOne.split(', ');
    const [bFirst, bLast] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
})
// console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'bike', 'walk', 'boat', 'car', 'van', 'bike', 'boat', 'walk', 'car', 'van', 'car', 'truck', 'scooter'];
const transportation = data.reduce( function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {} );

console.log(transportation); // { car: 5, truck: 3, bike: 3, walk: 2, boat: 2, van: 2, scooter: 1 }