// merge sort uses divide and conquer technique
const merge = (leftArr, rightArr) => {
  const MergedArray = [];
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
    if (leftArr[leftPointer] <= rightArr[rightPointer]) {
      MergedArray.push(leftArr[leftPointer]);
      leftPointer++;
    }
    if (leftArr[leftPointer] > rightArr[rightPointer]) {
      MergedArray.push(rightArr[rightPointer]);
      rightPointer++;
    }
  }
  // when you exist this while loop then you must have traversed one array but you won't
  // be sure that you traversed the other so you should fill in it elements
  // now we will check the elements that we didn't travers and push then all to the MergedArray
  if ((leftPointer = leftArr.length && rightPointer < rightArr.length)) {
    // then you traversed all of the left elements and you didn't with the right elements
    // so you should push all of the elements of the rightArr to the MergedArray
    for (let i = rightPointer; i < rightArr.length; i++) {
      MergedArray.push(rightArr[i]);
    }
  }
  if ((leftPointer < leftArr.length && rightPointer = rightArr.length)) {
    // then you traversed all of the right elements and you didn't with the left elements
    // so you should push all of the elements of the leftArr to the MergedArray
    for (let i = leftPointer; i < leftArr.length; i++) {
      MergedArray.push(leftArr[i]);
    }
  }
  return MergedArray;
};
const mergeSort = (Arr) => {
  const mid = Math.floor(Arr.length / 2);
  if (Arr.length < 2) {
    return Arr;
  }
  let leftArr = mergeSort(Arr.slice(0, mid));
  let RightArr = mergeSort(Arr.slice(mid));
  return merge(leftArr, RightArr);
};
let arr = [5, 4, 3, 2, 1];
console.log(mergeSort(arr));
