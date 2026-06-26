/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let freq = {}
    for(let ch of s){
        freq[ch] = (freq[ch]||0)+1
    }

    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowel = 0;
    let maxConsonant = 0;

      for (let ch in freq) {
        if (vowels.has(ch)) {
            maxVowel = Math.max(maxVowel, freq[ch]);
        } else {
            maxConsonant = Math.max(maxConsonant, freq[ch]);
        }
    }

    return maxVowel + maxConsonant;
};