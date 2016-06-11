var x = 0;
var answer = function (first, second, math) {
  if(math == '+'){
    x = Number(first) + Number(second);
  } else if (math == '-') {
    x = first - second;
  } else if (math == '/') {
    x = first / second;
  } else if(math == '*'){
    x = first * second;
  }else{
    x = 'What the heck are you trying to do?';
  }
  return x;
};
module.exports = answer;
