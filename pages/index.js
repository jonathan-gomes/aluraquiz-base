import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'

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

export default function Home() {
  return (
      <QuizBackground backgroundImage={db.bg}>
        <Head>
          <title>Quiz de God of War</title>
          <meta name="title" content={db.title}></meta>
          <meta name="description" content={db.description}></meta>

          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content={db.appURL}></meta>
          <meta property="og:title" content={db.title}></meta>
          <meta property="og:description" content={db.description}></meta>
          <meta property="og:image" content={db.bg}></meta>

          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:url" content={db.appURL}></meta>
          <meta property="twitter:title" content={db.title}></meta>
          <meta property="twitter:description" content={db.description}></meta>
          <meta property="twitter:image" content={db.bg}></meta>
        </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
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
