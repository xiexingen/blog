// exp1(?=exp2)：查找 exp2 前面的 exp1。
console.log('------------------查找数字前面的runoob------------------');
console.log('123456runoob123runoob456'.match(/runoob(?=[\d+])/gim));

// (?<=exp2)exp1：查找 exp2 后面的 exp1。
console.log('------------------查找数字后面的runoob------------------');
console.log('123456runoob123runoob456'.match(/(?<=[\d+])runoob/gim));

// exp1(?!exp2)：查找后面不是 exp2 的 exp1。
console.log('------------------查找runoob，但后面不是数字------------------');
console.log('123456runoob-google123runoob456'.match(/runoob(?![\d+])/gim));

// (?<!exp2)exp1：查找前面不是 exp2 的 exp1。
console.log('------------------查找前面不是数字的runoob------------------');
console.log('123456runoob-googlerunoob456'.match(/(?<![\d+]runoob)/gim));
