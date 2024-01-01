import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const count = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
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
  }, [hours, minutes, seconds]);

  return (
    <>
      <TimerContainer>
        {`0${hours}`}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </TimerContainer>
      {modal && <Modal />}
    </>
  );
}

const TimerContainer = styled.section`
  color: white;
  font-size: 2.2rem;
`;
