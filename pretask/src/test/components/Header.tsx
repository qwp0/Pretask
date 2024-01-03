import styled from 'styled-components';
// import Timer from './Timer';
import { useState } from 'react';
import Timer2 from './Timer2';

export default function Header() {
  const [isStop, setIsStop] = useState(false);

  function handleStop() {
    setIsStop(true);
  }
  return (
    <HeaderContainer>
      <Button type="button">뒤로가기</Button>
      {/* <Timer isStop={isStop} /> */}
      <Timer2 isStop={isStop} />
      <Button type="button" onClick={handleStop}>
        종료하기
      </Button>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 3rem;
  background-color: #222325;
`;
const Button = styled.button`
  padding: 0.6rem 1.6rem;
  color: white;
  background-color: #707579;
  border: none;
  border-radius: 0.8rem;
`;
