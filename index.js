function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML)+n;
  }
}

function deepestChild() {
   var list = document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0; i<list.length-1; i++) {
    test = list[i].querySelector("div");
  }
return test;
}