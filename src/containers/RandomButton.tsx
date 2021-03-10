import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { sendRandomNumber } from '../redux/modules/example';
import Button from '../components/Button/Button';

const RandomButton: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(sendRandomNumber());
  }, []);

  return <Button onClick={handleClick}>Random</Button>;
};

export default RandomButton;
