function mergeSort(arr) {
    if (arr.length <= 1) 
        return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);

}

function merge(left, right) {
    const output = [];
    let i = 0;
    let j = 0;


    while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      output.push(left[i]);
      i++;
    } else {
      output.push(right[j]);
      j++;
    }
  }
   return output.concat(left.slice(i)).concat(right.slice(j));
}

//testttttt
console.log(mergeSort([])); 
console.log(mergeSort([73])); 
console.log(mergeSort([1, 2, 3, 4, 5])); // [1,2,3,4,5]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0,1,1,2,3,5,8,13]
console.log(mergeSort([105, 79, 100, 110])); // [79,100,105,110]