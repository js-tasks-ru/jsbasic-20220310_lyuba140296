function getMinMax(str) {
  let arr = str.split(' '); // ['1', 'b', '-5.8']
  let result = [];
  for (const num of arr) {
     let parsed = parseFloat(num);
     if (!isNaN(parsed)) {
       result.push(parsed);
     }
  }
  result.sort((a,b) => { return a - b } );
  console.log(result);
  
  return { min: result[0], max: result[result.length - 1]}
}