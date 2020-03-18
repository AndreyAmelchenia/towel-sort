module.exports = function towelSort (matrix) {
  
  matrix.forEach(element => {
    if (Array.isArray(element)){
      element.forEach(el => {
        arr.push(el);
      })
    } else {
      arr.push(element)
    }
  });
  console.log(arr);
  return arr.sort((a, b) => a - b );
}
