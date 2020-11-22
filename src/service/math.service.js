import {ADD_SUB_WITHIN_TEN} from '../helper';
import {MathematicsBuilder} from "@sunzhongmou/math/lib/mathematics.builder";

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
  const builder = new MathematicsBuilder();
  const mathematics = builder
    .withAdd(25)
    .withSub(25)
    .withFill(4)
    .build();
  return mathematics.generate()
}