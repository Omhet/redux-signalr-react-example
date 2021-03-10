import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';

const RandomText: FunctionComponent = () => {
  const number = useSelector((state: RootState) => state.example.number);

  return <p>{number}</p>;
};

export default RandomText;
