/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
        let sToT = {};
    let tToS = {};

    for (let i = 0; i < s.length; i++) {
        let c1 = s[i];
        let c2 = t[i];

        if (c1 in sToT) {
            if (sToT[c1] !== c2) return false;
        } else {
            sToT[c1] = c2;
        }

        if (c2 in tToS) {
            if (tToS[c2] !== c1) return false;
        } else {
            tToS[c2] = c1;
        }
    }

    return true;
};