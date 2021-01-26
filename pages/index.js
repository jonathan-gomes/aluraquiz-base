import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  position: absolute;
  margin-top: auto;
  right: 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    right: auto;
    padding: 15px;
  }
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
            <p>{db.description}</p>
          </Widget.Content>
          <Widget.Content>
            <form onSubmit={function (event) { onNameChange(event, router, name); }}>
              <input onChange={function (event) { setName(event.target.value); }} placeholder="Digite o seu nome" />
              <button type="submit" disabled={name.length === 0}>
                Jogar como&nbsp;
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jonathan-gomes/aluraquiz-base" />
    </QuizBackground>

  );
}
