import { Dispatch, RootState } from "../types";
import {
  withCallbacks,
  signalMiddleware
} from "redux-signalr";
import { setText, exampleFsa } from "../modules/example";
import { HttpTransportType, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const callbacks = withCallbacks<RootState, Dispatch>()
  .add(
    "ReceiveMessage",
    (msg: string, some: string) => (dispatch, getState, invoke) => {
      const { example } = getState();
      
      console.log(msg, some, example.text);
      dispatch(setText(msg));
      invoke('SendRandomNumber')
    }
  )
  .add("ReceiveRandomNumber", (num: number) => (dispatch) => {
    console.log(num);
    dispatch(exampleFsa.setRandomNumber(num));
  } );

export const connection = new HubConnectionBuilder()
  .configureLogging(LogLevel.Debug)
  .withUrl("https://0.0.0.0:5001/testHub", {
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets,
  })
  .build();

const signal = signalMiddleware({
  callbacks,
  connection,
  shouldConnectionStartImmediately: false
});

export default signal; 
