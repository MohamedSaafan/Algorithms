const quickSort = (arr, s, e) => {
  // we will consider that the start is the pivot

  if (e <= s) {
    // then the size of the sub array will be 0 or one
    // then we won't to do any thing and return
    //as it will be our base case and every thing will be sorted after that
    return;
  }

  const p = partition(arr, s, e);
  // this will put our e into  its right position
  // and return its index to divide our array into two arrays
  // one is smaller than the e and one is greater than the e
  quickSort(arr, s, p - 1);
  // this will order the left subarray recusively
  quickSort(arr, p + 1, e);
  // this will order the right subarray recusively
};

const partition = (arr, s, e) => {
  // now again we will consider the e as our pivot and put it in its right place
  let pivot = arr[e];
  let i = s - 1;
  // we will start from an index after the begenning of the subarray not
  // don't put it -1
  for (let j = s; j < e; j++) {
    if (arr[j] <= pivot) {
      // then we will swap arr[j] with i+1 at the beggening the i is outside the array as we didn't know any thing yet
      // if the first element is less than the pivot then we will swap it with i+1 ;  when i = -1 then i+1 is 0
      // that's mean that we will swap the first element with it self
      // to be honest we will do alot of unnecessarly swapping
      //to avoid if condition as its const is greater than the unnecessarly swapping
      // now we will write the code to swap
      let temp = arr[i + 1];
      arr[i + 1] = arr[j];
      arr[j] = temp;
      i++;
    }
  }
  // after that we will swap the pivot (the end of the array) with i+1 with the first element that is be greater than the pivot
  let temp = arr[i + 1];
  arr[i + 1] = pivot;
  arr[e] = temp;
  i++;
  // we will increase the i to point to the index of the pivot
  return i;
};
let arr = [3, 5, 4, 1, 3];
quickSort(arr, 0, 4);
console.log(arr);
