import styled from 'styled-components';

export default function Modal() {
  return (
    <ModalContainer>
      <ModalView>
        <Text>시험이 종료되었습니다. 수고하셨습니다!</Text>
        <SubText>답안지를 이미지로 제출해주세요.</SubText>
        <ChooseButton type="button">답안지 파일 선택하기</ChooseButton>
      </ModalView>
    </ModalContainer>
  );
}

const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  gap: 2.5rem;
  padding: 4.8rem 5.6rem;
  background-color: white;
  border: none;
  border-radius: 1.2rem;
`;
const Text = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
`;
const SubText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: gray;
`;
const ChooseButton = styled.button`
  padding: 0.8rem 4rem;
  background-color: #6478ff;
  color: white;
  border: none;
  border-radius: 0.8rem;
`;
