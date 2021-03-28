/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */




const checkIfContain = (answer_hash,window_hash) =>{   
    for (let [key, value] of answer_hash){
        if (window_hash.has(key)){
            if (window_hash.get(key) < value){
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

var minWindow = function(s, t) {
    let answer_hash = new Map();
    let window_hash = new Map();
    let solution = ''
    let answer = '';
    for (let i = 0; i < t.length; i++){
        if (answer_hash.has(t.charAt(i))){
            const temp = answer_hash.get(t.charAt(i));
            answer_hash.set(t.charAt(i),temp + 1);
        } else {
           answer_hash.set(t.charAt(i),1);
        }
    }
    

    let left = 0;
    let right = 0;
    
    while (right < s.length){
        answer += s.charAt(right);
        if (window_hash.has(s.charAt(right))){
            const temp = window_hash.get(s.charAt(right));
            window_hash.set(s.charAt(right),temp + 1);
        } else {
            window_hash.set(s.charAt(right),1);
        }

        while(checkIfContain(answer_hash,window_hash)){
            if (solution === '') {
                solution = answer;
            } else {
                solution = solution.length > answer.length ? answer : solution;
            }
            const temp = window_hash.get(s.charAt(left));
            window_hash.set(s.charAt(left),temp - 1);
            answer = answer.slice(1);            
            left++;
        } 
        right++;
        
    }
    









    while (left < s.length){
        if (checkIfContain(answer_hash,window_hash)){
            if (solution === '') {
                solution = answer;
            } else {
                solution = solution.length > answer.length ? answer : solution;
            }
        }   
            const temp = window_hash.get(s.charAt(left));
            window_hash.set(s.charAt(left),temp - 1);
            answer = answer.slice(1);            
            left++;
    }

    return solution;
};



console.log('solution',minWindow('ADOBECODEBANC','ABC'));