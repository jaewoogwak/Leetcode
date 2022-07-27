/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s == "") return 0;
    const check = {
        'a' : false,
        'b' : false,
        'c' : false,
        'd' : false,
        'e' : false,
        'f' : false,
        'g' : false,
        'h' : false,
        'i' : false,
        'j' : false,
        'k' : false,
        'l' : false,
        'm' : false,
        'n' : false,
        'o' : false,
        'p' : false,
        'q' : false,
        'r' : false,
        's' : false,
        't' : false,
        'u' : false,
        'v' : false,
        'w' : false,
        'x' : false,
        'y' : false,
        'z' : false
    };
    let left = 0;
    let right = 1;
    let maxLen = 1;
    let str = s[0];
    check[s[0]] = true;
    while(left <= right && right < s.length) {
        if(!check[s[right]]) {
            str = s.slice(left, right + 1)
            check[s[right]] = true;
            right++;
            if(maxLen < str.length) maxLen = str.length;
        } else {
            check[s[left]] = false;
            left++;
            str = s.slice(left, right + 1);
        }
    }
    return maxLen;
    
};
