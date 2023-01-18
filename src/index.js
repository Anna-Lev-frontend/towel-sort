
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(!matrix || !matrix.length){
    return []
  }
  
  return matrix.reduce((acc, item, index) => {
    return acc.concat((index % 2) ? item.reverse(): item)
  })
}
