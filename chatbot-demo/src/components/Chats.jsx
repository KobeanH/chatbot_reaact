import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@mui/material/List";
import { Chat } from "./index";

const useStyles = makeStyles(() =>
  createStyles({
    chats: {
      height: 390,
      padding: "0",
      overflow: "auto",
    },
  })
);

const Chats = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.chats}>
      {props.chats.map((chat, index) => {
        return (
          <Chat text={chat.text} type={chat.type} key={index.toString()} />
        );
      })}
    </List>
  );
};

export default Chats;
