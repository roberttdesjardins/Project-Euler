function findFactorial() {
  const answerP = document.querySelector("#factorialAnswer");
  let numberEntered = parseInt(prompt("Enter a number"));
  if (isNaN(numberEntered)) {
    alert("Please enter a number")
  } else {
    answerP.innerHTML = "Answer: " + calcFactorial(numberEntered);
  }
}
function calcFactorial(number) {
  let answer = 1;
  while(number > 0) {
    answer *= number;
    number--;
  }
  return answer;
}

function addAll() {
  const answerP = document.querySelector("#addAllAnswer");
  let numberEntered = parseInt(prompt("Enter a number"));
  if (isNaN(numberEntered)) {
    alert("Please enter a number")
  } else {
    answerP.innerHTML = "Answer: " + calcAddAll(numberEntered);
  }
}
function calcAddAll(number) {
  let answer = 0;
  while(number > 0) {
    answer += number;
    number--;
  }
  return answer;
}

function surviveOdds() {
  const userEntered = document.querySelector("#userEnteredMinions");
  const answerP = document.querySelector("#surviveOddsAnswer");
  let arrayEntered = prompt("Enter an array of numbers where each number is a minions health. Max 7 minions. Example: 8,1,2,1,5,6,12")
  let randomDamage = prompt("Enter the amount of random damage")
  arrayEntered = arrayEntered.split(",")
  arrayEntered = removeNonNumbers(arrayEntered);
  arrayEntered = changeToNumbers(arrayEntered);
  userEntered.innerHTML = "Minions: " + arrayEntered;
  answerP.innerHTML = "Answer: " + surviveOddsSim(arrayEntered, randomDamage);
}

// Takes in an array and removes all the non-number characters
// Returns the new array
function removeNonNumbers(arr) {
  const newArray = arr.map(x => x.replace(/\D/g,''));
  return newArray;
}

// Takes in a string array and creates a number array
// Returns the new array
function changeToNumbers(arr) {
  let newArray = arr.map(x => parseInt(x));
  newArray = newArray.filter(elem => !isNaN(elem));
  return newArray;
}

function surviveOddsSim(arr, num) {
  if(sumArr(arr) <= num) {
    return "None Survive"
  } else {
    let finalArr = Array(arr.length).fill(0);
    let simulationIteration = 0;
    while (simulationIteration < 100000){
      let tempArr = arr.slice(0);
      let tempNum = num;
      while (tempNum > 0) {
        var randEl = Math.floor(Math.random() * tempArr.length);
        if(tempArr[randEl] != 0) {
          tempArr[randEl]--;
          tempNum--;
        } 
      }
      for(let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] !== 0) {
          finalArr[i]++;
        }
      }
      simulationIteration++;
    }
    return findPercentages(finalArr);
  }
}

function sumArr(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function findPercentages(arr) {
  let newArray = arr.map(x => x/1000);
  return newArray;
}