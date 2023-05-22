//easy------------------------------------------------------------

function addArray(arr) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num / arr.length;
}

const arr1 = [1, 4, 7];
const arr2 = [10, 5];
const arr3 = [1.5, 3, 2.5, 1];

// console.log(addArray(arr1));
// console.log(addArray(arr2));
// console.log(addArray(arr3));

//medium------------------------------------------------------------

function pivot(arr, x) {
  let index;

  for (let i = 0; i < arr.length; i++) {
    let checkIndex = arr[i];
    if (checkIndex === x) {
      index = arr.indexOf(x);
      break;
    } else {
      index = -1;
    }
  }
  return index;
}
// console.log(pivot(arr1, 4));
// console.log(pivot(arr1, 2));
// console.log(pivot(arr3, 1));
// console.log(pivot(arr3, 1.5));
// console.log(pivot(arr3, 12));

//Hard------------------------------------------------------------
document.querySelector(".btn-red").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#ff0000";
});
document.querySelector(".btn-white").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#ffff";
});

//Very Hard------------------------------------------------------------

function findMoney(coins, total) {
  //create an array to store the least amount of numbers that make up total
  const arr = new Array(total + 1).fill(Infinity);

  //set the array to start with 0 for the least amount
  arr[0] = 0;

  //for loop to Iterate through each index from 1 to n from the total argument 
  for (let i = 0; i <= total; i++) {
    //for of loop to Check each denmomination is less than or equal to the current index
    for (j of coins) {
      if (j <= i) {
        //Calculate the minimum number of coins required for the current amount
        // by taking the minimum of the current index value and the value at arr[i - coin] + 1
        arr[i] = Math.min(arr[i], arr[i - j] + 1);
      }
    }
  }
  // Ternary operator than returns -1 if total is still Infinity
  // else will return the fewest number of coins to make up total
  return arr[total] === Infinity ? -1 : arr[total];
}

console.log(findMoney([1, 2, 5], 11));

