export const formatNumberWithCommas = (num) => {
  if (num !== undefined) {
    var str = num.toString().split(".");
    // if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    // }
    // if (str[1] && str[1].length >= 5) {
    //  str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    // }
    return str.join(".");
  }
  return num;
};

export const roundToNearestHundred = (num) => {
  if (num > 10000) {
    num = Math.round(num / 10000) * 10000;
  } else if (num > 1000) {
    num = Math.round(num / 1000) * 1000;
  } else if (num > 100) {
    num = Math.round(num / 100) * 100;
  } else if (num > 10) {
    num = Math.round(num / 10) * 10;
  }

  return num;
};
