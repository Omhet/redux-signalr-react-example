import { RootState } from '../types';

export const getText = (state: RootState) => {
  return state.example.text;
};
