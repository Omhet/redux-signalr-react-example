import { rootReducer } from './rootReducer';
import { AnyAction } from 'redux';
import { SignalAction, SignalDispatch } from 'redux-signalr';

export type RootState = ReturnType<typeof rootReducer>;

export type Action<ReturnValue = void> = SignalAction<
  ReturnValue,
  RootState,
  AnyAction
>;

export type Dispatch<Action extends AnyAction = AnyAction> = SignalDispatch<
  RootState,
  Action
>;
