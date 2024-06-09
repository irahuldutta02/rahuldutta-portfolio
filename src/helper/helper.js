export function getCountFromDate(date) {
  // Parse the input date string to a Date object
  const startDate = new Date(date);
  
  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the current date and the input date
  const differenceInMillis = currentDate - startDate;

  // Convert milliseconds to years, months, and remaining days
  const years = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24 * 365));
  let months = Math.floor((differenceInMillis % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const remainingDays = Math.floor((differenceInMillis % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

  // If remaining days are less than a month, consider it as a month
  if (remainingDays > 0 && remainingDays < 30) {
      months += 1;
  }

  // Construct the result string
  let result = "";
  if (years > 0) {
      result += `${years} Year${years > 1 ? 's' : ''} `;
  }
  if (months > 0) {
      result += `${months} Month${months > 1 ? 's' : ''}`;
  }

  return result.trim(); // Trim any extra spaces at the end
}


export function generateUUID() {
    // Returns a random integer between 0 and 15 (inclusive)
    function randomHexDigit() {
        return Math.floor(Math.random() * 16).toString(16);
    }

    // UUID pattern is 8-4-4-4-12
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = randomHexDigit();
        // For 'x', use the random hex digit
        // For 'y', use a random value from 8 to 11 (10-13 in hex)
        var v = (c === 'x') ? r : (r & 0x3 | 0x8).toString(16);
        return v;
    });
}