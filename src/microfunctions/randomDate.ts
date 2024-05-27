// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  // Function to generate a random date
function getRandomDate() {
    const minYear = 1900; // Minimum year
    const maxYear = 2100; // Maximum year
    const year = getRandomInt(minYear, maxYear);
    const month = getRandomInt(0, 11); // Months are 0-based index
    const day = getRandomInt(1, 31); // Days range from 1 to 31
  
    return new Date(year, month, day);
}
  
  // Example usage
export const randomDate = getRandomDate();
