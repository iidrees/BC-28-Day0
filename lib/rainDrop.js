const findRainDrop = (num) => { // A program to convert prime factor to string
  if (typeof num !== 'number') { // Checks inputs data-type
    return 'Please enter an integer'; // Requests for correct input
  }
  if (num < 1) { // checks if input is less than 1
    // asks for the an input greater than 1
    return 'Please enter a number greater than 1';
  } 
  // if the two conditions above fails
  let rainSpeak = '';
  if (num % 3 === 0) {
    rainSpeak += 'Pling';
  }
  if (num % 5 === 0) {
    rainSpeak += 'Plang';
  }
  if (num % 7 === 0) {
    rainSpeak += 'Plong';
  }
  if (num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
    return num;
  }
  return rainSpeak;
};

export default {
  findRainDrop,
};
