var x = 0;
// A function that goes through every single function that you have put in
//If one matches what the mathematic term is then it will go through with the process
//of computing the two numbers and returning the answer.
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
