window.addEventListener('load', function () {
    let jyankens = [];
    for (let i = 0; i < 4; i++) {
        jyankens.push(i);
    }


    //let current = i;//現在の手
    let result;//勝敗
    let action;//行動：
    let myhand;
    let current;


    let enemybot = document.getElementById("enemy");
    let resultbot = document.getElementById("result");
    let Rockbtn = document.getElementById("Rock");
    let scissorsbtn = document.getElementById("scissors");
    let paperbtn = document.getElementById("paper");

    function init() {
        rewriting();
        jyanken();
        enemyjyanken();

    }
    function jyanken() {
        let candidate;//候補

        candidate = jyankens[Math.floor(Math.random() * jyankens.length)];

        myhand = candidate;

    }
    function enemyjyanken() {
        let str;//候補

        str = jyankens[Math.floor(Math.random() * jyankens.length)];

        current = str;

    }
    function rewriting() {
        enemybot.innerHTML = '現在の敵: ???';

        resultbot.innerHTML = '勝敗: ???';
    }
    Rockbtn.addEventListener('click', function () {
        action = 'Rock';

        if (current < myhand) {
            enemybot.innerHTML = '現在の敵:' + 'チョキ✌️';
            resultbot.innerHTML = '勝敗：' + '勝ち';

        } else if (current = myhand) {
            enemybot.innerHTML = '現在の敵:' + 'グー✊';
            resultbot.innerHTML = '勝敗：' + '引き分け';
        } else {
            enemybot.innerHTML = '現在の敵:' + 'パー🖐';
            resultbot.innerHTML = '勝敗：' + '負け';
        }
        openCard();
    });
    scissorsbtn.addEventListener('click', function () {
        action = 'scissors';

        if (current < myhand) {
            enemybot.innerHTML = '現在の敵:' + 'パー🖐';
            resultbot.innerHTML = '勝敗：' + '勝ち';

        } else if (current = myhand) {
            enemybot.innerHTML = '現在の敵:' + 'チョキ✌️';
            resultbot.innerHTML = '勝敗：' + '引き分け';
        } else {
            enemybot.innerHTML = '現在の敵:' + 'グー✊';
            resultbot.innerHTML = '勝敗：' + '負け'
        }
        openCard();
    });
    paperbtn.addEventListener('click', function () {
        action = 'paper';
        if (current < myhand) {
            enemybot.innerHTML = '現在の敵:' + 'グー✊';
            resultbot.innerHTML = '勝敗：' + '勝ち';

        } else if (current = myhand) {
            enemybot.innerHTML = '現在の敵:' + 'パー🖐';
            resultbot.innerHTML = '勝敗：' + '引き分け';
        } else {
            enemybot.innerHTML = '現在の敵:' + 'チョキ✌️';
            resultbot.innerHTML = '勝敗：' + '負け'
        }
        openCard();
    });
    function openCard() {

        setTimeout(init, 1000);
    }


    init();


});







