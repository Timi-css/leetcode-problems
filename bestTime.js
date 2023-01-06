let prices = [7, 6, 4, 3, 1];

let maxProfit = function (prices) {
  let [left, right, max] = [0, 1, 0];

  while (right < prices.length) {
    const canSlide = prices[right] <= prices[left];
    if (canSlide) left = right;

    const window = prices[right] - prices[left];

    max = Math.max(max, window);
    right++;
  }

  return max;
};

console.log(maxProfit(prices));
