import { HubConnectionState } from '@microsoft/signalr';
import React, { FunctionComponent, useCallback } from "react";
import Button from "../components/Button/Button";
import { connection } from "../redux/helpers/createSignalMiddleware";

const StartConnectionButton: FunctionComponent = () => {
  const handleClick = useCallback(() => {
    if (connection.state !== HubConnectionState.Connected) {
      connection
        .start()
        .then(() => console.log("Connection started"))
        .catch((err) => console.error(err.toString()));
    }
  }, []);

  return <Button onClick={handleClick}>Start Connection</Button>;
};

export default StartConnectionButton;
