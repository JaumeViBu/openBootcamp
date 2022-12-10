function getXFirstFibonacci(num = 0) {
  let i = 0;
  let res = [];

  if (typeof num != 'number') throw 'Num must be a number';

  while (i < num) {
    if (i === 0 || i === 1) res = [...res, 1];
    else res = [...res, res[i - 2] + res[i - 1]];
    i++;
  }

  return res;
}

console.log(getXFirstFibonacci(6));