function 記号表現に変換する(カード) {
    const マーク_絵文字
            = { 'ハート': '♡', 'クローバー': '♧', 'ダイア': '♢', 'スペード': '♤'};
    const 数字からAJQK = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'};
    for(let i=2; i<=10; i++) 数字からAJQK[i] = i;
    return マーク_絵文字[カード.マーク] + 数字からAJQK[カード.数字];
}

const カードの束 = [];
for(let マーク of ['ハート', 'クローバー', 'ダイア', 'スペード'])
    for(let 数字=1; 数字<=13; 数字++)
        カードの束.push({マーク, 数字});

let 選択されたカード_記号表現 = カードの束.filter(カード => カード.数字 === 2).map(記号表現に変換する);
console.log(選択されたカード_記号表現);

選択されたカード_記号表現 = カードの束.filter(カード => カード.マーク === 'ダイア').map(記号表現に変換する);
console.log(選択されたカード_記号表現);

選択されたカード_記号表現 = カードの束.filter(カード => カード.数字 > 10).map(記号表現に変換する);
console.log(選択されたカード_記号表現);

選択されたカード_記号表現 = カードの束.filter(カード => カード.数字 > 10 && カード.マーク === 'ハート').map(記号表現に変換する);
console.log(選択されたカード_記号表現);
