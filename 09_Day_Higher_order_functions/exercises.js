const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Exercises: Level 1
// Explain the difference between forEach, map, filter, and reduce.
// Define a call function before you them in forEach, map, filter or reduce.

// Use forEach to console.log each country in the countries array.
countries.forEach(e=>console.log(e))

// Use forEach to console.log each name in the names array.
names.forEach(e=>console.log(e))
// Use forEach to console.log each number in the numbers array.
numbers.forEach(e=>console.log(e))
// Use map to create a new array by changing each country to uppercase in the countries array.
countries.map(e=>e.toUpperCase()).forEach(e=>console.log(e))

// Use map to create an array of countries length from countries array.
countries.map(e=>e.length).forEach(e=>console.log(e))

// Use map to create a new array by changing each number to square in the numbers array
numbers.map(e=> e*e).forEach(e=>console.log(e))

// Use map to change to each name to uppercase in the names array
names.map(e=>e.toUpperCase)

// Use map to map the products array to its corresponding prices.
//wtf.

// Use filter to filter out countries containing land.
countries.filter(e => e.toLowerCase().endsWith("land"))

// Use filter to filter out countries having six character.
countries.filter(e => e.length == 6)

// Use filter to filter out countries containing six letters and more in the country array.
countries.filter(e => e.length >= 6)

// Use filter to filter out country start with 'E';
countries.filter(e => e.startsWith("E"))

// Use filter to filter out only prices with values.
products.filter(e => typeof e.price === 'number' )

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(lst){
    return lst.filter(e => typeof e === 'string')
}


// Use reduce to sum all the numbers in the numbers array.
numbers.reduce((a,b )=> a+b,0)

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
countries.toString() + "are north European countries"

// Explain the difference between some and every


// Use some to check if some names' length greater than seven in names array
names.some(e=> e.length>=7)

// Use every to check if all the countries contain the word land
countries.every(e => e.includes("land"))
// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array
countries.find(e => e.length===6 )

// Use findIndex to find the position of the first country containing only six letters in the countries array
countries.findIndex(e => e.length === 6)

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
countries.findIndex(e => e === 'Norway')

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
countries.findIndex(e => e === 'Russia')



// Exercises: Level 2
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
products.map(e=> e).filter(e => typeof e.price === 'number').map(x=>x.price).reduce((a,b) => a+b,0)

// Find the sum of price of products using only reduce reduce(callback))
products.reduce(a=>a)

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
