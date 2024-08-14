const 入力 = "８月３０日ⅯＡＺ 昨年四月三〇日。";
let マッチ = 入力.match(/[０-９]/g);
console.log(マッチ);
マッチ = 入力.match(/[０-９]/);
console.log(マッチ);