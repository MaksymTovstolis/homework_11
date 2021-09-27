
function sum (a, b) { 
    return a + b ;
}

function main(a,b,c) {
    if (typeof c === 'function') {
       return c;
    } else {
        return sum(a,b);
    }
    
} 

console.log(c);