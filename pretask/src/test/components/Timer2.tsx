import { useEffect } from 'react';
import { createTimeModel, useTimeModel } from 'react-compound-timer';
import styled from 'styled-components';

export interface StopProps {
  isStop: boolean;
}

const timer = createTimeModel({
  initialTime: 3601000, //ms 단위(s*1000)
  direction: 'backward',
});

export default function Timer2({ isStop }: StopProps) {
  const { value, pause } = useTimeModel(timer);

  useEffect(() => {
    if (isStop) {
      pause();
    }
  }, [isStop, pause]);

  return (
    <TimerContainer>
      {`0${value.h}`}:{value.m < 10 ? `0${value.m}` : value.m}:{value.s < 10 ? `0${value.s}` : value.s}
    </TimerContainer>
  );
}
const TimerContainer = styled.section`
  color: white;
  font-size: 2.2rem;
`;
