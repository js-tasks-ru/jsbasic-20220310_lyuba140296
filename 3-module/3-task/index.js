function camelize(str) {
    let arr = str.split('-');
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      if (i != 0) {
        const word = ucFirst(arr[i]);
        result += word;
      } else {
        result += arr[i];
      }
    } 
    return result;
}

function ucFirst(str) {
  if (str.length < 1) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}

