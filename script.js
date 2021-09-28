function sum (a, b) {
    return a + b ;
} 
  
function main(a, b, c) {
    const sumResult = sum(a, b);
    if (typeof c === 'function') {
        return c(sumResult);
    }
    return sumResult;
}
