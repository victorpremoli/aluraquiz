import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          Alura Quiz
        </title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>STAR WARS</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Teste os seus conhecimentos sobre o vasto universo de star wars e divirta-se, ou não!
            </p>
            {/* eslint-disable-next-line func-names */}
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                placeholder="Seu nome."
                // eslint-disable-next-line func-names
                onChange={function (e) {
                  // name = e.target.value;
                  setName(e.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Vamos jogar?
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p> loremipsum dolor sit ameet.... </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/victorpremoli" />
    </QuizBackground>
  );
}
