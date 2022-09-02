let oddOrEven = function (num) {
  let number = num;
  output = [];
  sNumber = number.toString();
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }
  for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
  if (sum % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};

oddOrEven(44);
oddOrEven(30);
