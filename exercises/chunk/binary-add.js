function addB(a, b){
    function sc(s) {
            if(s === '11') {
                s  = '0';
                carry = '1';

            } 
             if(s === '10' || s === '01') {
                s  = '1';
                carry = '';
                
            } 
             if(s === '00') {
                s  = '0';
                carry = '';
                
            }
            if(s === '111') {
                s  = '1';
                carry = '1';

            } 
             if(s === '100' || s === '001') {
                s  = '1';
                carry = '';
                
            } 
             if(s === '00') {
                s  = '0';
                carry = '';
                
            } 
        return {carry: carry, s: s}
    }
	    aLength = a.length;
	    bLength = b.length;
        maxlengthArr  = a;
        minlengthArr = b;
        if (bLength > aLength) {
            maxlengthArr = b;
            minlengthArr = a;
        }
        sum = '';
        carry = '';
        for(let i = 0; i < maxlengthArr.length;i++){
            
            s = maxlengthArr[maxlengthArr.length-1-i]
          
            if(i < minlengthArr.length) {
                s = s + minlengthArr[minlengthArr.length-i-1]
            }
            if (carry !== '') {
                s = s + carry
            }
            
           let abc = sc(s);
            s = abc.s;
            carry = abc.carry
          

                    sum = sum + s;
                      if (i === maxlengthArr.length-1) {
              
                sum = carry + sum
            }
            
        }
        return sum
}

addB("100", "11")