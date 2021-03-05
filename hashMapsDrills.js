function isPalindrome(input) {
    let odd = 0;
    const m = new Map();
    for(let i=0; i<input.length; i++) {
        const letter = input[i];
        if(m.has(letter)){
            m.set(letter, m.get(letter) + 1)
        } else {
            m.set(letter, 1)
        }
    }


    const iterator1 = m.values();

    for (const item of iterator1) {
        if (item % 2 !== 0) {
            odd++;
        }
    }

    return odd <= 1;

}

console.log(isPalindrome("mym"));
