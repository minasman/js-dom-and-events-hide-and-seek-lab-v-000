function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('div.target');
}

function increaseRankBy(n){
    const list = document.querySelectorAll('main ul.ranked-list li');
    for (let i = 0; i < list.length; i++){
        list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    }
}

function deepestChild(){
    let last = document.getElementById('grand-node').querySelectorAll('div').length;
    return document.getElementById('grand-node').querySelectorAll('div')[last - 1];
}