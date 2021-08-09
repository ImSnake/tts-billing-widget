/**
 * Формат даты из предстваления "2021-01-31" в "01.01.2021"
 * @param date
 * @returns {string}
 */
export const dateFormatDdMmYyyy = (date) => {
  const format = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  return date.replace(format, '$3.$2.$1');
};

/**
 * Валидация Даты
 * @param date
 * @returns {boolean}
 */
export const dateIsValid = (date)=> {
  return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
};

/**
 * Склонить окончание исчисляемого существительного в зависимости от переданного количества
 * @param count
 * @param one
 * @param two
 * @param five
 * @returns {string}
 */
export const getWordEnding = (count, one, two, five) => {
  const n = Math.abs(count) % 100;
  const n10 = n % 10;
  let result = "";
  (n >= 5 && n <= 20) ? result = five : (n10 > 1 && n10 < 5) ? result = two : (n10 === 1) ? result = one : result = five;
  return result;
};

/**
 * // Format a number with grouped thousands
  // + original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // + improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +bugfix by: Michael White (http://crestidg.com)
 * @param number
 * @param decimals
 * @param dec_point
 * @param thousands_sep
 * @returns {string}
 */
export const numberFormat = (number, decimals, dec_point, thousands_sep) => {
  let i, j, kw, kd, km;

  // input sanitation & defaults
  if( isNaN(decimals = Math.abs(decimals)) ){
    decimals = 2;
  }
  if( dec_point == undefined ){
    dec_point = ",";
  }
  if( thousands_sep == undefined ){
    thousands_sep = ".";
  }

  i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

  if( (j = i.length) > 3 ){
    j = j % 3;
  } else{
    j = 0;
  }

  km = (j ? i.substr(0, j) + thousands_sep : "");
  kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
  //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
  kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");

  return km + kw + kd;
};

/**
 * Сравнить два объекта с одним уровнем вложенности
 * @param object1
 * @param object2
 * @returns {boolean}
 */
export const objectShallowCompare = (object1, object2) =>{
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};