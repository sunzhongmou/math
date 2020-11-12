import {ADD_SUB_WITHIN_TEN} from '../helper';

export const userService = {
    getQuestions,
};

function getQuestions(questionType) {
    let questions = [];
    if (questionType === ADD_SUB_WITHIN_TEN) {
        questions = getAddSubWithinTenQuestions();
    }
    
    return questions
}

function getAddSubWithinTenQuestions() {
    let elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let add = getCombination(elements).filter(ele => ele.first + ele.last <= 10);
    let sub = getReduceCombination(elements.reverse());
    
    let target = shuffle([].concat(add).concat(sub)).slice(1, 51);
    target[49].hiddenFirst = Math.random() >= 0.5;
    target[48].hiddenFirst = Math.random() >= 0.5;
    target[47].hiddenFirst = Math.random() >= 0.5;
    target[46].hiddenFirst = Math.random() >= 0.5;
    
    return target.map((ele, index) => {
      if (index > 45) {
        if (ele.hiddenFirst){
          return  "__ " + ele.symbol + " " + ele.last + " = " + ele.total
        } else {
          return  ele.first + " " + ele.symbol + " __" + " = " + ele.total
        }
      }
      return ele.first + " " + ele.symbol + " " + ele.last + " = "
    });
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomPickElement(elements) {
    let random = Math.floor(Math.random() * elements.length);
    return elements[random]
}

function getCombination(elements) {
    return  elements.reduce((previousValue, currentValue) => 
        previousValue.concat(elements.map(
          f => {return {
            "first": currentValue, 
            "last": f,
            "symbol": "+",
            "total": currentValue + f}})),
      []);
}

function getReduceCombination(element) {
  return [].concat(...element.map(
    (v, i) => element.slice(i+1).map( w => {return {
      "first": v, 
      "last": w,
      "symbol": "-",
      "total": v - w}}))
  );
}