// Merge Sort
// it continuely splits the array in half and sorts, then halves are merged into one sorted list

function mergeSort(list) {
  const len = list.length

  if (len == 1) {
    return list
  }

  const middleIndex = Math.ceil(len / 2)

  let leftList = list.slice(0, middleIndex)
  let rightList = list.slice(middleIndex, len)
  
  leftList = mergeSort(leftList)
  rightList = mergeSort(rightList)

  return merge(leftList, rightList)
}

function merge(leftList, rightList) {
  const sorted = []

  while (leftList.length > 0 && rightList.length > 0) {
    let leftItem = leftList[0]
    let rightItem = rightList[0]

    if (leftItem > rightItem) {
      sorted.push(rightItem)
      rightList.shift()
    } else {
      sorted.push(leftItem)
      leftList.shift()
    }
  } 

  while (leftList.length !== 0) {
    sorted.push(leftList[0])
    leftList.shift()
  }

  while (rightList.length !== 0) {
    sorted.push(rightList[0])
    rightList.shift()
  }

  return sorted
}

const list = [5,7,2,4,7,1]

const sortedList = mergeSort(list)

console.log(sortedList)

