import React from 'react';
import db from '../db.json';

import QuizBackground from '../src/components/QuizBackground';

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <div>
        Página de quiz
      </div>
    </QuizBackground>
  );
}
