import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../redux/modules/example';
import Button from '../components/Button/Button';

const MainButton: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(sendMessage('Text'));
  }, []);

  return <Button onClick={handleClick}>PUSH ME</Button>;
};

export default MainButton;
