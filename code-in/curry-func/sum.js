function sum(...a1) {
    a = a1.reduce((n,m) => n + m);
    return function(...b1) {
        b = b1.length > 0 ?b1.reduce((n,m) => n + m) : '';
        if(b) {
            return sum(a+b) 
        }
        return a
    }
}




console.log(sum(1)(2)(2)(3)()) // 8
console.log(sum(1,2)(2,3)(1,2)) //8