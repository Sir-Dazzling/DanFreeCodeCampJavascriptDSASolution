function checkCashRegister(price, cash, cid) {
  const rate = [
    //'exchange' rate
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  let changeArr = [];
  let coinCounter = [];
  let change = cash - price;
  let total = cid.reduce((sum, category) => sum + category[1], 0).toFixed(2);
  let sum = 0;
  let auxiliaryArr = [];

  for (let i = 0; i < Object.keys(rate).length; i++) {
    coinCounter.unshift(Math.round(cid[i][1] / rate[i][1]));
  }

  rate.reverse(); //still easier and more readable than rewriting the loop above and the rate-object ...or is it?

  for (let i = 0; i <= coinCounter.length; i++) {
    for (let j = 0; j < coinCounter[i]; j++) {
      if (change >= rate[i][1]) {
        change -= rate[i][1];
        change = change.toFixed(2); // (numbers act funny without this...
        total -= rate[i][1];
        total = total.toFixed(2); // ...and this)
        sum += rate[i][1];

        if (sum > 0) {
          auxiliaryArr = [rate[i][0], Number(sum.toFixed(2))];
          changeArr.push(auxiliaryArr);
          auxiliaryArr = [];
        }
      }
    }
    sum = 0;
  }

  if (change == 0 && total > 0) {
    for (let i = 0; i < changeArr.length; i++) {
      if (!changeArr[i + 1]) {
        break;
      } else if (changeArr[i + 1][0] == changeArr[i][0]) {
        delete changeArr[i];
      }
    }
    changeArr = changeArr.filter(function (el) {
      return el != null;
    });
    return { status: "OPEN", change: changeArr };
  } else if (change == 0 && total == 0) {
    return { status: "CLOSED", change: cid };
  } else if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}
