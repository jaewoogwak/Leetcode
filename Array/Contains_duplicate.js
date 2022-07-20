/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = new Set();
    nums.forEach(num => hash.add(num));
    const len = Array.from(hash).length;
    if(len == nums.length) return false;
    else return true;
};
