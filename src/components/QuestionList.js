import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div.attrs({
  className: 'container-lg clearfix',
})`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div.attrs({
  className: 'col-2 float-left border p-3',
})`
  font-size: 28px;
  width: 20%;
`;

const QuestionList = ({ questions }) => {
  return (
    <CardContainer>
      {questions.map((question, index) => (
        <Card key={index}>{question}</Card>
      ))}
    </CardContainer>
  );
};

export default QuestionList;
