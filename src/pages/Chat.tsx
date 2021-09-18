import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

export const Chat: React.FC = () => {
  return (
    <>
      <div>
        <TextField variant="standard" label="Message" />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </>
  );
};
