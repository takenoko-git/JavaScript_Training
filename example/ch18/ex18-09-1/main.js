function highlightParas(containing) {
    if(typeof containing === 'string')
        containing = new RegExp(`${containing}`);
    const paras = document.getElementsByTagName('p');
    for(let p of paras) {
        if(!containing.test(p.textContent)) continue;
        p.classList.add('highlight');
    }
}

function removeParaHighlights() {
    const paras =  document.getElementsByTagName('p');
    for (let p of paras) {
        p.classList.remove('highlight');
    }
}

const highlightActions = document.querySelectorAll('[data-action="highlight"]');
for(let a of highlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        highlightParas(a.dataset.containing);
    });
}

const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for(let a of removeHighlightActions) {
    a.addEventListener('click',  evt => {
        evt.preventDefault();
        removeParaHighlights();
    })
}

