export const getFixedNoRonding = (number, fixedLength) => {
  let stringNumber = String(number);
  if (number / 1000 < 1) {
    return stringNumber;
  } else if (number / 1000 >= 1 && number / 1000 <= 999.999) {
    stringNumber = String(number / 1000);
    return stringNumber.slice(0, stringNumber.indexOf('.') + fixedLength + 1) + 'k';
  } else {
    stringNumber = String(number / 1000000);
    return stringNumber.slice(0, stringNumber.indexOf('.') + fixedLength + 1) + 'm';
  }
};

export const colorByLang = (language) => {
  if (language) {
    switch (language.toLocaleLowerCase()) {
      case 'javascript':
        return 'js';
      case 'html':
        return 'html';
      case 'java':
        return 'java';
      case 'css':
        return 'css';
      default:
        return 'defaultLanguaje';
    }
  } else {
    return '';
  }
};
