function addBase62(num1, num2) {
  const base = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? base.indexOf(num1[i]) : 0;
    const digit2 = j >= 0 ? base.indexOf(num2[j]) : 0;

    const sum = digit1 + digit2 + carry;

    carry = Math.floor(sum / 62);
    const remainder = sum % 62;
    result = base[remainder] + result;

    i--;
    j--;
  }

  return result;
}