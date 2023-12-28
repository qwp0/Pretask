import styled from 'styled-components';
import essayImg from '../../assets/image/testImg.jpeg';

export default function Essay() {
  return (
    <EssayContainer>
      <Question src={essayImg} alt="논술문제 이미지" />
    </EssayContainer>
  );
}

const EssayContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;
const Question = styled.img`
  width: 93rem;
`;
