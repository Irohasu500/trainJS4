/*
 * const, letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言"; //syntax warning
// console.log(val1);

// //意図しない部分での再宣言によるエラー

//ctr + /でコメントアウト

let val2 = "let変数";
console.log(val2);

//letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

//letは再宣言不可能
//let val2 = "let変数を再宣言";

const val3 = "const変数";
console.log(val3);

//const変数は上書き不可能
//val3  "const変数を上書き";

//const val3 = "const変数を再宣言";

const val4 = {
  name: "yumeki",
  age: 21
};
console.log(val4); //こっちも変わっている。

val4.name = "user";
console.log(val4);

//constでは、オブジェクト変数の中身を変えることができる。
//しかも、代入順序は上から順に処理される順番ではない。

//プロパティも追加できる。
val4.addres = "Hiroshima";
//console.log(val4);

//変数も変えられる。
//再宣言はできない。
//実際の開発では、constが使用される。
const val5 = ["dog", "cat"];
console.log(val5);
val5[0] = "bird";

val5.push("mokey");
/*
 * スプレット構文
 */
//配列
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1); //ここ！、配列の要素について

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1); //これも上と同じ。各要素を展開して渡す。

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2; //残りはどう処理するかで使う。
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4]; //このようにコピーするときに使える。
console.log(arr4);
console.log(arr5);
console.log(arr6);

// //配列のコピーにも使える。
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;    //この方法もあるではないかと思われるが
// console.log(arr8);    //参照渡しになって不具合。

// arr8[0] = 100;      //arr4も一緒に変更される。

//じゃけえさんのブログにある。
arr6[0] = 100; //実際にコピー渡しとなる例では、大丈夫

/*
 * maplやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけえ"];
//従来は下記のようにして配列を処理していた。
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

//mapは引数にアロー関数を使う。
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//これで上記のfor文と同様の処理が可能。
nameArr.map((name) => console.log(name));

//filterを使ってみる。
const numArr = [1, 2, 3, 4, 5];
//filterは条件に合う要素だけを返す。
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1; //奇数だけ返却する
});
console.log(newNumArr);

//実際は配列のindexが大切になることが多い。
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}
//mapでは以下のように2つ目の引数にindexが出てくる。
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

//実践的なプログラム
//特定の要素だけを処理する；；
const newNameArr = nameArr.map((name) => {
  if (name === "じゃけえ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

//reactでは画面表示の際に使う

/*
 *  三項演算子
 *
 */
// ある条件 ? 条件がtrueの時　: 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString()); //三桁区切りで","を入れる。

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";

// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
};

console.log(checkSum(50, 40));
/**
 *  論理演算子の本当の意味を知ろう && ||
 */

const frag1 = true;
const frag2 = false;
if (frag1 || frag2) {
  console.log("1か2はtrueになります。");
}

if (frag1 && frag2) {
  console.log("1も2もtrueになります。");
}

// || や && は　または　かつではない。
// || は左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です。";
console.log(fee);

// && は左側がtrueなら右側を返す。
const numx = null;
const fee2 = numx && "何か設定されました";
console.log(fee2);

//ちなみに論理演算子で返すにはどうしたら？
// nullや0はflase, 文字や数字はtrueと判定される。
