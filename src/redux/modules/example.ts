import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Action } from '../types';

export const fsa = {
  setText: createAction('EXAMPLE/SET_TEXT')<string>(),
  setRandomNumber: createAction('EXAMPLE/SET_RANDOM_NUMBER')<number>(),
};
export const exampleFsa = fsa;

interface State {
  text: string;
  number: number | undefined;
}

const initialState: State = {
  text: '',
  number: undefined
};

export const example = withState(initialState)
  .add(
    fsa.setText,
    (state, { payload }) => ({
      ...state,
      text: payload
    })
  )
  .add(
    fsa.setRandomNumber,
    (state, { payload }) => ({
      ...state,
      number: payload
    })
  )

export const sendMessage = (txt: string): Action => (dispatch, getState, invoke) => {
  invoke('SendMessage', txt) 
};

export const sendRandomNumber = (): Action => (dispatch, getState, invoke) => {
  invoke('SendRandomNumber')
};

export const setText = (txt: string): Action => (dispatch, getState) => {
  const {
    example: { text }
  } = getState();
  dispatch(fsa.setText(`${text}\n${txt} - ${new Date().getSeconds()}`));
};
