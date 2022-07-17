/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let profit = 0;
    let max_profit = 0;
    while(right < prices.length) {
        if(prices[right] - prices[left] < 0) {
            left = right;
            right +=1;
        } else {
            if(max_profit < prices[right] - prices[left]) max_profit = prices[right] - prices[left];
            right +=1;
        }
    }
    return max_profit
}

// left는 최솟값을 원함. 그래서 prices[right] < prices[left] 일 때 left를 right 위치로 이동시킴
// prices[right] > prices[left] 일 때는 max_profit에 max_checking 후 값을 할당해줌.
// 그리고 right만 증가시킴.
// 그러다가 prices[right] < prices[left]를 발견한다? -> left를 더 작게 만들 수 있다. -> left = right로 업데이트
// 위 과정 반복.
