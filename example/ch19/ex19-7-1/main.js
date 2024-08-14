$(function() {
    let TimerID = setInterval(refreshServerInfo, 200);

    function refreshServerInfo() {
        const $serverInfo = $('.serverInfo');
        $.get('http://localhost:7070').then(
            function(data) {
                Object.keys(data).forEach(p => {
                    $(`[data-replace="${p}"]`).text(data[p]);
                });
            },
            function(jqXHR, textStatus, err) {
                const $errorInfo =$('.error');
                console.error("エラーが起こりました：" + err);
                $errorInfo.text("エラー：サーバーに接続できません。");
                clearInterval(TimerID);
            }
        );
    }
})