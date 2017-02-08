function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  //increase the ranks in all ranked-lists by n
  // variable to store NodeList of ranked-Lists
  const rankedLists = document.querySelectorAll('ul.ranked-list');
  //there are 2 ul ranked-lists nodes you need to change the ranks to
  const firstList = rankedLists[0];
  const secList = rankedLists[1];
  //lis are the children of these lists, those are the values you change
  let children = firstList.children;

  for(let i=0, l=children.length; i<l; i++){
    //variable for the value of the childNode
    let ranks = children[i].innerHTML;
    children[i].innerHTML = (parseInt(ranks,10)+n).toString();
  }

  children = secList.children;

  for(let i=0, l=children.length; i<l; i++){
    //variable for the value of the childNode
    let ranks = children[i].innerHTML;
    children[i].innerHTML = (parseInt(ranks,10)+n).toString();
  }
}

function deepestChild(){
  //return the most deeply nested child in #grand-node
  //you can iterate over elements call querySelector() and querySelectorAll()
  //var for NodeList that grand-node returns
  const grandNode = document.querySelectorAll('div#grand-node');
  //last child div whose index is NodeList.length - 1
  let i = grandNode.length - 1;
  return grandNode[i];
}
