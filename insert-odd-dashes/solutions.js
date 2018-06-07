/* exported insertDash */
'use strict';

function insertDash(num) {
    let oddCount = 0;

    return num.toString().split('').map(a => {
        if(a % 2 !== 0) {
            oddCount++;
            if(oddCount >= 2) {
                return '-' + a;
            }
            else {
                return a;
            }
        }
        else {
            oddCount = 0;
            return a;
        }
    }).join('');
}


//"anti-pattern"