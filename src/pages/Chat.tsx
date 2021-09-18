import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import React from "react";

export const Chat: React.FC = () => {
  return (
    <>
      <div className="page">
        <h2 className="section-header">Messages</h2>
        <List>
            <ListItem>
                <ListItemText 
                    primary={"Neo"}
                    secondary={"Yeah, we can meet up tomorrow!"}
                />
            </ListItem>
        </List>
      </div>
    </>
  );
};
