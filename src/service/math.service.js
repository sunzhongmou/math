import {ADD_SUB_WITHIN_TEN, ADD_WITHIN_TEN, ADD_WITHIN_TEN_FILL, SUB_WITHIN_TEN, SUB_WITHIN_TEN_FILL} from '../helper';
import { MathematicsBuilder } from '@sunzhongmou/math/lib/mathematics.builder';

export const userService = {
  getQuestions,
};

function getQuestions(questionType) {
  let questions = [];
  
  switch (questionType) {
    case ADD_SUB_WITHIN_TEN:
      questions = getAddSubWithinTenQuestions();
      break;
    case ADD_WITHIN_TEN:
      questions = getAddWithinTenQuestions();
      break;
    case ADD_WITHIN_TEN_FILL:
      questions = getAddFillWithinTenQuestions();
      break;
    case SUB_WITHIN_TEN:
      questions = getSubWithinTenQuestions();
      break;
    case SUB_WITHIN_TEN_FILL:
      questions = getSubFillWithinTenQuestions();
      break;
    default:
      questions = getAddSubWithinTenQuestions();
  }
  return questions;
}

function getAddSubWithinTenQuestions() {
  const builder = new MathematicsBuilder();
  const mathematics = builder.withAdd(25).withSub(25).withFill(4).build();
  return mathematics.generate();
}

function getAddWithinTenQuestions() {
  const builder = new MathematicsBuilder();
  const mathematics = builder.withAdd(50).withSub(0).withFill(0).build();
  return mathematics.generate();
}

function getAddFillWithinTenQuestions() {
  const builder = new MathematicsBuilder();
  const mathematics = builder.withAdd(50).withSub(0).withFill(50).build();
  return mathematics.generate();
}

function getSubWithinTenQuestions() {
  const builder = new MathematicsBuilder();
  const mathematics = builder.withAdd(0).withSub(50).withFill(0).build();
  return mathematics.generate();
}

function getSubFillWithinTenQuestions() {
  const builder = new MathematicsBuilder();
  const mathematics = builder.withAdd(0).withSub(50).withFill(50).build();
  return mathematics.generate();
}
