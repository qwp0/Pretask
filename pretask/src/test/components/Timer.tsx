import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

export interface StopProps {
  isStop: boolean;
}
export default function Timer({ isStop }: StopProps) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const count = setInterval(() => {
      if (isStop) {
        setModal(true);
        clearInterval(count);
      } else if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(count);
            setModal(true);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => clearInterval(count);
  }, [hours, isStop, minutes, seconds]);

  return (
    <>
      <TimerContainer>
        {`0${hours}`}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </TimerContainer>
      {modal && <Modal setModal={setModal} />}
    </>
  );
}

const TimerContainer = styled.section`
  color: white;
  font-size: 2.2rem;
`;
