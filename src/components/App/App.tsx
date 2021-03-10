import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import MainButton from '../../containers/MainButton';
import MainText from '../../containers/MainText';
import RandomButton from '../../containers/RandomButton';
import RandomText from '../../containers/RandomText';
import StartConnectionButton from '../../containers/StartConnectionButton';

const App: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <StartConnectionButton />
      <MainButton />
      <RandomButton />
      <RandomText />
      <MainText />
    </div>
  );
};

export default App;
