import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const DescDiv = styled.div`
  font-size: 14px;
`;
export const PlayInput = styled.input`
  background-color:  transparent;
  color: ${({ theme }) => theme.colors.contrastText};
  width: 100%;
  padding: 0px;
  height: 36px;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.contrastText};
  padding-left: 20px;
  outline: none;
  :focus{
   border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const PlayButton = styled.button`
  background-color:  ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  width: 100%;
  padding: 0px;
  height: 36px;
  border-radius: 3px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.secondary};
  margin-top: 24px;
  margin-bottom: 32px;
`;
export const WidgetQuizCards = styled(Widget.Content)`
  margin-bottom: 32px;
`;
export const CardQuizGit = styled.div`
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

function onNameChange(event, router, name) {
  router.push(`/quiz?name=${name}`);
  event.preventDefault();
}

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <DescDiv>{db.description}</DescDiv>
          </Widget.Content>
          <Widget.Content>
            <form onSubmit={function (event) { onNameChange(event, router, name); }}>
              <PlayInput onChange={(event) => setName(event.target.value)} placeholder="Digite o seu nome" />
              <PlayButton type="submit" disabled={name.length === 0}>
                JOGAR
              </PlayButton>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <WidgetQuizCards>
            <h1>Quizes da Galera</h1>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React/NextJS fez:</p>
            <CardQuizGit>clebinhodj/showdomilhaoalura</CardQuizGit>
            <CardQuizGit>clebinhodj/showdomilhaoalura</CardQuizGit>
            <CardQuizGit>clebinhodj/showdomilhaoalura</CardQuizGit>
          </WidgetQuizCards>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jonathan-gomes/aluraquiz-base" />
    </QuizBackground>

  );
}
