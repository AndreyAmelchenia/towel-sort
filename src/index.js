module.exports = function towelSort (matrix) {
  if (matrix){
    const arr = [];
    for (let i = 0 ; i < matrix.length; i++){
      if (!(i%2 === 0)) {
        matrix[i].reverse();
      matrix[i].forEach(element => {
        arr.push(element)      
      });
      } else {
        matrix[i].forEach(element => {
        arr.push(element)
        });
      }
    }
    console.log(arr);
    return arr;
  } else {
    return [];
  }
    
}
