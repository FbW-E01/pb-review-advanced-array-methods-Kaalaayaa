// # Review - Advanced array methods

// NOTE! Pay close attention to creating code with good and consistent code style.

// Use advanced array methods for all of these (forEach, map, etc.). You might have to search for an appropriate method to use on MDN.

// 1. Create an array with 10 objects, each of them should have a "name" property and a "URL" property and a "number" property.
const websites = [
    {name: "Harvie Whitmore", url: "https://www.google.de/", number: 3542},
    {name: "Sara O'Brien", url: "https://twitter.com/", number: 2548},
    {name: "Eshal Beaumont", url: "https://www.instagram.com", number: 7784},
    {name: "Harris Horner", url: "https://www.facebook.com/", number: 1874},
    {name: "Jerome Fernandez", url: "https://www.youtube.com/", number: 6598},
    {name: "Elmer Kline", url: "https://fr.linkedin.com/", number: 2147},
    {name: "Kade Hills", url: "www.kadehills.com", number: 7896},
    {name: "Maya Mayo", url: "https://github.com/", number: 7254},
    {name: "Marissa Cullen", url: "playstation.com", number: 9651},
    {name: "Kymani Bull", url: "tinder.com", number: 4523}
]
// 2. Then based on the array, create a new array that contains just the names.
// const names = websites.map(({ name }) => name);

// OR 

const names = websites.map(function(something){
    let websiteNames = something["name"];
    return websiteNames;
})
console.log(names);

// 3. Go through the array and check each individual URL property - if the URL starts with "http", print the URL. Otherwise, print "Invalid URL for" and the value of the name property.
websites.filter(function(value){
 if (value.url.startsWith("https")){
     console.log(value.url);

 } else {
     console.log(`Invalid URL for ${value.name}`)
 }

 });
// 4. Sort the array based on the "number" property to a random order.
const shuffledArray = websites.sort((a, b) => 0.5 - Math.random());
console.log(shuffledArray);

// 5. Sort the array based on the "number" property, with the lowest number first.
const numbers = websites.map(({ number }) => number);
console.log(numbers);
const lowestNumber = websites.sort((a, b) => a.number - b.number);
console.log(lowestNumber);

// 6. Sort the array based on the "number" property, with the highest number first.
const highestNumber = websites.sort((a, b) => b.number - a.number);
console.log(highestNumber);

// 7. Based on the array, create a string with all of the names of the people in the array separated by a comma and then replace the last comma with the string `" and "`.
const allNames = names.join(", ").replace(/,(?!.*,)/gmi, " and ");
console.log(allNames);