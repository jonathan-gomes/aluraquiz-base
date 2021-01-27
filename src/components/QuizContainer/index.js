import styled from 'styled-components';

const QuizContainer = styled.div`
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

export default QuizContainer;
