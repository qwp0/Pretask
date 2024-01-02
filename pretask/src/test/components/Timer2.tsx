import { useEffect, useState } from 'react';
import { createTimeModel, useTimeModel } from 'react-compound-timer';
import styled from 'styled-components';
import Modal from './Modal';

export interface StopProps {
  isStop: boolean;
}

export default function Timer2({ isStop }: StopProps) {
  const initialTime = 3600000;
  const [timer, setTimer] = useState(
    createTimeModel({
      initialTime, //ms 단위(s*1000)
      direction: 'backward',
    })
  );
  const { value, pause } = useTimeModel(timer);
  const [modal, setModal] = useState(false);
  const takeTime = initialTime / 1000 - (value.h * 3600 + value.m * 60 + value.s);

  useEffect(() => {
    setTimer(
      createTimeModel({
        initialTime,
        direction: 'backward',
      })
    );
  }, [initialTime]);

  useEffect(() => {
    if (isStop) {
      pause();
      setModal(true);
    }
  }, [isStop, pause]);

  return (
    <>
      <TimerContainer>
        {`0${value.h}`}:{value.m < 10 ? `0${value.m}` : value.m}:{value.s < 10 ? `0${value.s}` : value.s}
      </TimerContainer>
      {modal && <Modal setModal={setModal} takeTime={takeTime} />}
    </>
  );
}
const TimerContainer = styled.section`
  color: white;
  font-size: 2.2rem;
`;
