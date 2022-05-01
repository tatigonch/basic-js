const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(typeof date === "undefined")
    return 'Unable to determine the time of year!';
  try{
    date.getTimezoneOffset();
  }
  catch{
    throw new Error("Invalid date!");
  }
  
  let month = date.getMonth();
  let season;
  if(month == 11 || month == 0 || month == 1) {
    season = "winter";
  }
  if(month >= 2 && month <= 4) {
    season = "spring";
  }
  if(month >= 5 && month <= 7) {
    season = "summer";}
  if(month >= 8 && month <= 10) {
    season = "autumn";
  }
  return season;
}

module.exports = {
  getSeason
};
