console.log("utilities.js");

var getSVG = function(path) {
  return <svg dangerouslySetInnerHTML={{__html: '<use xlink:href='+path+' />'}} />;
}

var formatCashAmt = function(arr) {
  for (var amt in arr) {
    arr[amt] = String(arr[amt]);
    var mod = Math.ceil(arr[amt].length / 3);
    switch(mod) {
      case 2:
        var lastThree = arr[amt].substring(arr[amt].length-3, arr[amt].length);
        lastThree = ',' + lastThree;
        var formatted = arr[amt].substring(0, arr[amt].length-3);
        formatted = formatted + lastThree;
        arr[amt] = formatted;
        break;
      case 3:
        var lastThree = arr[amt].substring(arr[amt].length-3, arr[amt].length);
        lastThree = ',' + lastThree;
        var formatted = arr[amt].substring(0, arr[amt].length-3);
        formatted = formatted + lastThree;
        arr[amt] = formatted;
        var middleThree = arr[amt].substring(arr[amt].length-7, arr[amt].length);
        middleThree = ',' + middleThree;
        formatted = arr[amt].substring(0, arr[amt].length-7);
        formatted = formatted + middleThree;
        arr[amt] = formatted;
        break;
    }
    arr[amt] = '$' + arr[amt];
  }
}

export { getSVG, formatCashAmt };
