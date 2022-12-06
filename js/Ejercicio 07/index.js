const newSet = new Set([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]);
console.log(newSet);

newSet.add(1);
newSet.delete(1);

console.log(newSet);

// newSet.clear();
// console.log(newSet);

console.log(newSet.has(4));
console.log(newSet.size);

newSet.forEach(valor => console.log(valor));

for (const valor of newSet) console.log(valor);

const it_newSet = newSet.values;
console.log(it_newSet);

const arrNewSet = [...newSet];
console.log(arrNewSet);

//////////////////////////////////////////////////////

console.log(
  new Date('01/01/2000').getTime()
  ===
  new Date('01/01/2000').getTime()
);

console.log(new Date('01/20/2000').toLocaleDateString());