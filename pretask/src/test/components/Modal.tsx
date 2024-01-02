import React from 'react';
import styled from 'styled-components';

export interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  takeTime: number;
}
export default function Modal(props: ModalProps) {
  function handleButton() {
    props.setModal(false);
  }
  const hours = Math.floor(props.takeTime / 3600);
  const minutes = Math.floor((props.takeTime - hours * 3600) / 60);
  const seconds = props.takeTime - (hours * 3600 + minutes * 60);
  return (
    <ModalContainer>
      <ModalView>
        <Text>시험이 종료되었습니다. 수고하셨습니다!</Text>
        <SubText>답안지를 이미지로 제출해주세요.</SubText>
        <TotalTime>
          {`소요시간 : 0${hours}시간 `}
          {minutes < 10 ? `0${minutes}분 ` : `${minutes}분 `}
          {seconds < 10 ? `0${seconds}초` : `${seconds}초`}
        </TotalTime>
        <ChooseButton type="button" onClick={handleButton}>
          답안지 파일 선택하기
        </ChooseButton>
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
  align-items: center;
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
const TotalTime = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
`;
const ChooseButton = styled.button`
  padding: 0.8rem 4rem;
  background-color: #6478ff;
  color: white;
  border: none;
  border-radius: 0.8rem;
`;
