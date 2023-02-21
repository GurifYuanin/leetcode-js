/**
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
countAndSay(5) = say "1211" = one 1 one 2 two 1 = "111221"
countAndSay(6) = say "111221" = three 1 two 2 one 1 = "312211"
 */
// 根据题目普普通通地实现
function countAndSay(n: number): string {
  const strs = ['1'];
  for (let i = 1; i <= n; i++) {
    const str = strs[i - 1];
    let newStr = '', currentChar = '', j = 0, count = 0;
    for (; j < str.length; j++) {
      if (currentChar === '') {
        count++;
        currentChar = str[j];
      } else if (currentChar === str[j]) {
        count++;
      } else {
        newStr += `${count}${currentChar}`;
        currentChar = str[j];
        count = 1;
      }
    }
    newStr += `${count}${currentChar}`;
    strs.push(newStr);
  }
  return strs[n - 1];
};