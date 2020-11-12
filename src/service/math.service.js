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
    let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let target = getCombination(elements).filter(ele => ele.first + ele.last < 10);
    let randomTarget = [];
    for (let i = 0; i < 50 - target.length; i++) {
        randomTarget = randomTarget.concat(randomPickElement(target))
    }
    
    return shuffle(target.concat(randomTarget).map(ele => ele.first + " + " + ele.last + " = "))
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
          f => {return {"first": currentValue, "last": f}})),
      []);
}
