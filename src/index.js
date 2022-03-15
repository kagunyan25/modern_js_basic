// /**
//  * const,let等の変数宣言
//  */
// var val1 = 'var変数';
// console.log(val1);

// // var変数は上書き可能
// val1 = 'var変数を上書き';
// console.log(val1);

// // var変数は再宣言可能
// var val1 = 'var変数を再宣言';
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// // letは上書き可能
// val2 = 'let変数を上書き'
// console.log(val2);

// // letは再宣言不可能
// let val2 = 'let変数を再宣言';

// const val3 = 'const変数';
// console.log(val3);

// // constは上書き不可能
// val3 = 'const変数を上書き';

// // constは再宣言不可能
// const val3 = 'const変数を再宣言';

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: '美波',
//   age : 22,
// };
// val4.name = 'mnm';
// val4.address = 'Tokyo';
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('hamster');
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = '美波';
// const age = '23';
// // 「私の名前は美波です。年齢は23歳です。」

// // 従来の方法
// const message1 = '私の名前は' + name + 'です。年齢は' + age +'歳です。';
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "美波",
//   age: 23
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["美波", 23];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayhello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayhello("美波");

/**
 * スプレッド構文 ...
 */
//　 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1); // => [1, 2]
// // console.log(...arr1); // => 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]); // => 3
// sumFunc(...arr1); // => 3

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num1); // => 1
// console.log(num2); // => 2
// console.log(num3); // => [3, 4, 5]

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6); // => [10, 20]

// arr6[0] = 100;
// console.log(arr6); // => [100, 20]
// console.log(arr4); // => [10, 20]

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); // => [10, 20, 30, 40]

// // ※= でコピーしたものに代入すると元の配列にも変化が生じてしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log (arr6); // => [100, 20]
// console.log (arr4); // => [100, 20]

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "中村"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2); // => ["田中", "山田", "中村"]

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num%2 === 1;
// });
// console.log(newNumArr); // => [1, 3, 5]

// const newNameArr = nameArr.map((name) => {
//   if (name === "中村") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ?  条件trueのとき :　条件falseのとき
// const val1 = 1 < 0 ? 'trueです' : 'falseです'
// console.log(val1);

const num = 1300;
// console.log(num.toLocaleString()); // => 1,300

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 60));
