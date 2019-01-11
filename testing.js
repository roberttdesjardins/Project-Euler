function missingNum(arr) {
  let sum = 0;
  arr.forEach(elem => {
    sum += elem;
  });

  let highestNum = 0;
  for(let i = 0; i < arr.length; i++) {
    highestNum = Math.max(highestNum, arr[i]);
  }

  let sumShouldBe = 0;
  for(let i = 1; i <= highestNum; i++) {
    sumShouldBe += i;
  }
  return sumShouldBe - sum;
}

function removeDups(arr) {
  let mergedArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(!mergedArr.includes(arr[i])){
      mergedArr.push(arr[i]);
    }
  }
  return mergedArr;
}

function findDupsHash(arr) {
  let hashTable = {};
  let returnArr = [];
  for(let i = 0; i < arr.length; i++) {
    if( arr[i] in hashTable ) {
      returnArr.push(arr[i]);
    } else {
      hashTable[arr[i]] = arr[i];
    }
  }
  return returnArr;
}


function pairSumBrute(arr, sum) {
  while(arr.length >= 2) {
    for(let i = 1; i < arr.length; i++){
      if(arr[0] + arr[i] == sum) {
        console.log(arr[0] + "+" + arr[i] + "=" + sum);
      }
    }
    arr.splice(0,1);
  }
}

function pairSumHash(arr, sum) {
  var hashtable = {};
  for(let i = 0; i < arr.length; i++) {
    let target = sum - arr[i];
    if(!(target in hashtable)) {
      hashtable[arr[i]] = arr[i];
    } else {
      console.log(arr[i] + "+" + target + "=" + sum);
    }
  }
  console.log(hashtable);
}


function reverseStringUsingRecursion(str) {
  if(str.length <= 1) {
    return str;
  }
  let tempStr = str.slice(0,-1);
  return str.slice(str.length-1, str.length) + reverseStringUsingRecursion(tempStr);
}

function firstNonRepeatedCharacter(str) {
  let strSplit = str.split('');
  let hashtable = {};
  for(let i = 0; i < strSplit.length; i++) {
    if(strSplit[i] in hashtable) {
      hashtable[strSplit[i]]++;
    } else {
      hashtable[strSplit[i]] = 1;
    }
  }

  for(let i = 0; i < strSplit.length; i++) {
    if(hashtable[strSplit[i]] == 1) return strSplit[i];
  }
  return "No non-repeated character";

}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let subArr1 = arr.slice(0, arr.length/2);
  let subArr2 = arr.slice(arr.length/2);
  subArr1 = mergeSort(subArr1);
  subArr2 = mergeSort(subArr2);

  return merge(subArr1, subArr2);
}

function merge(arr1, arr2) {
  let mergedArr = [];
  while(arr1.length >= 1 && arr2.length >= 1) {
    if (arr1[0] > arr2[0]) {
      mergedArr.push(arr2[0]);
      arr2.shift();
    } else {
      mergedArr.push(arr1[0]);
      arr1.shift();
    }
  }
  while(arr1.length >= 1) {
    mergedArr.push(arr1[0]);
    arr1.shift();
  }
  while(arr2.length >= 1) {
    mergedArr.push(arr2[0]);
    arr2.shift();
  }
  return mergedArr;
}

/* console.log(mergeSort([87, 57, 370, 110, 90, 610, 2, 710, 140, 203, 150])); */

function quickSort(arr, left, right) {
  if (left < right) {
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right);

    quickSort(arr, left, partitionIndex-1);
    quickSort(arr, partitionIndex+1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(arr[i] < arr[pivot]){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function swapTwo(x, y) {
  x = x ^ y;
  y = x ^ y;
  x = x ^ y;
  return [x, y];
}

function countVowels(str) {
  let regexVowels = new RegExp(/[aeiou]/gi);
  let vowels = str.match(regexVowels);
  return vowels.length;
}

//console.log(countVowels("Testing how many vowels"));

function mergeSort2(arr) {
  if(arr.length <= 1) return arr;

  let subArr1 = mergeSort2(arr.slice(0, arr.length/2));
  let subArr2 = mergeSort2(arr.slice(arr.length/2));

  return merge2(subArr1, subArr2);

}

function merge2(arr1, arr2) {
  let returnArr = [];
  while(arr1.length > 0 && arr2.length > 0) {
    if(arr2[0] > arr1[0]) {
      returnArr.push(arr1[0]);
      arr1.shift();
    } else {
      returnArr.push(arr2[0]);
      arr2.shift();
    }
  }
  while(arr1.length > 0) {
    returnArr.push(arr1[0]);
    arr1.shift();
  }
  while(arr2.length > 0) {
    returnArr.push(arr2[0]);
    arr2.shift();
  }
  return returnArr;
}

//console.log(mergeSort2([87, 57, 370, 110, 90, 610, 2, 710, 140, 203, 150]));

// Finds the nth fibonicci number
function fibRecursionBad(int) {
  if(int <= 1) return 1;
  return fibRecursionBad(int -1) + fibRecursionBad(int-2);
}

console.log(fibRecursionBad(20));

function fibRecursionGood(num) {
  function tailRec(num, a, b) {
    return (num <= 0 ? b : tailRec(num-1, b, a+b));
  } 
  return tailRec(num, 0, 1);
}

console.log(fibRecursionGood(20));