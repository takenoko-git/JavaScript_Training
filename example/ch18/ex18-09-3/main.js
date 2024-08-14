/*イベントハンドラを生成して、それを返す*/
function logEvent(handlerName, type, cancel, stop, stopImmediate) {
    /*ここが実際のイベントハンドラ*/
    return function(evt) {
        if(cancel) evt.preventDefault();
        if(stop) evt.stopPropagation();
        if(stopImmediate) evt.stopImmediatePropagation();
        console.log(`${type}: ${handlerName}` + (evt.defaultPrevented ? '(キャンセルされた)' :''));
    }
}

function addEventLogger(element, type, action) {
    const capture = type === 'cature';
    element.addEventListener(
        'click',
        logEvent(element.tagName, type, action==='cancel', action==='stop', action==='stop!'),
        capture);
}

const body = document.querySelector('body');
const div = document.querySelector('div');
const button = document.querySelector('button');

addEventLogger(body, 'capture');
addEventLogger(body, 'bubble');
addEventLogger(div, 'capture');
addEventLogger(div, 'bubble');
addEventLogger(button, 'capture');
addEventLogger(button, 'bubble');