//iterative method
function fibbonacci (n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const output =  [0, 1];

    for (let i = 2; i < n; i++) {
        output.push(output[i - 1]+ output[i-2]);
    }
    return output;
};

console.log("Iterative:", fibbonacci(8));


//using recursion
function fibbonacciRecursion(n) {


    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const curr = fibbonacciRecursion(n - 1);

    const nextNum = curr[curr.length - 1] + curr[curr.length - 2];
    curr.push(nextNum);
    return curr;
};
console.log("Recursive:", fibbonacciRecursion(8))