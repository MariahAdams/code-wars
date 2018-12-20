// Problem domain: https://www.codewars.com/kata/kebabize/train/javascript

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(s) {
  let c = s.replace(/\d*/g, '');
  let result = c.replace(/([A-Z])/g, x => '-' + x.toLowerCase());
  return result.match(/^-/) ? result.replace(/^-/, '') : result;
}

/* better way? */