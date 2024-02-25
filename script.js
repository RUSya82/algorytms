/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function(fn, t) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), t)
    }
};


//  const log = debounce(console.log, 100);
//  log('Hello'); // cancelled
//  log('Hello'); // cancelled
// log('Hello'); // Logged at t=100ms

////////////////////////////////////////////////////////////////////////
/**
 *
 * @param s {string}
 * @returns {number}
 */
function bestStringItem(s) {
    let maxRange = 0;
    let zeroCount = 0;
    let oneCount = 0;
    let currentStudy = 0;
    for(let i = 0; i < s.length; i++) {
        switch (currentStudy) {
            case 0:
                if(s[i] === '0'){
                    zeroCount++;
                } else if (s[i] === '1') {
                    currentStudy = 1;
                    oneCount = 1;
                }
                break;
            case 1:
                if(s[i] === '1'){
                    oneCount++;
                    if(oneCount <= zeroCount){
                        if(Math.min(zeroCount, oneCount) * 2 > maxRange){
                            maxRange = Math.min(zeroCount, oneCount) * 2;
                        }
                    }
                } else if(s[i] === '0') {
                    oneCount = 0;
                    zeroCount = 1;
                    currentStudy = 0;
                }
                break;
            default:
                break;
        }
    }
    return maxRange
}
const s = '010011011000111111100000011111100011111110000111111'
const d = '000000000000000000000000000011'
console.log(bestStringItem(d))
