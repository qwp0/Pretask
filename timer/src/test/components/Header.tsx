import styled from 'styled-components';
import Timer from './Timer';

export default function Header() {
  return (
    <HeaderContainer>
      <BackButton type="button">뒤로가기</BackButton>
      <Timer />
      <StopButton type="button">종료하기</StopButton>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #222325;
  padding: 1.5rem 3rem;
`;
const Button = styled.button`
  background-color: #707579;
  color: white;
  padding: 0.6rem 1.6rem;
  border: none;
  border-radius: 0.8rem;
`;
const BackButton = styled(Button)``;
const StopButton = styled(Button)``;
