// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         }else if (i % 5 == 0) {
//             console.log("Buzz");
//         }else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();



function findMissingNumber (nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    return n;
}

const inputArray = [0, 1, 2, 3, 5, 6, 7, 8, 9]
const missingNumber = findMissingNumber(inputArray);
console.log(missingNumber)