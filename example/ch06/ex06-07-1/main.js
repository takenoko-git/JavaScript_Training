const o = {
    name: 'Julie',
    greetBackwards: function() { /* オブジェクトoのプロパティ greetBackwards */
        const getReverseName = () => {  /* アロー関数*/
            console.log(this);
            let nameBackwards = '';
            for (i = this.name.length-1; i>=0; i--){
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }; /* ここまでアロー関数の定義*/

        return `${getReverseName()} si eman ym ,olleH`;
    }, /* オブジェクトoのプロパティgreetBackwardsの値の関数の低位の終わり */
};

console.log(o.greetBackwards());