import React from 'react';
import styled from 'styled-components';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';

const Img = styled.img`
  width: 100%;
`;
export const QuizResponseCard = styled.div`
  background-color: #00000029;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #00000029;
  margin-bottom: 10px;
`;

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            Pergunta 1 de 5
          </Widget.Header>
          <Widget.Content>
            <Img src="https://i.pinimg.com/originals/c9/9d/08/c99d087c826f0d088e17cd0e1769b83a.jpg" alt="God of War's pandora box" />
          </Widget.Content>
          <Widget.Content>
            O que estava contido na caixa de pandora?
          </Widget.Content>
          <Widget.Content>
            <QuizResponseCard>
              Pandora
            </QuizResponseCard>
            <QuizResponseCard>
              Lâminas do Caos
            </QuizResponseCard>
            <QuizResponseCard>
              Mal e esperança
            </QuizResponseCard>
            <QuizResponseCard>
              Lâmina do Olimpo
            </QuizResponseCard>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
