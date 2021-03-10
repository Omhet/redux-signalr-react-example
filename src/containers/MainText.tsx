import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';

const MainText: FunctionComponent = () => {
  const text = useSelector((state: RootState) => state.example.text);

  return <p>{text}</p>;
};

export default MainText;
