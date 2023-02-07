import React, { FC, useState } from "react";
import styles from "./AddCommentForm.index.module.scss";
import { Button, Input } from "@material-ui/core";

interface AddCommentForm {}

export const AddCommentForm: FC<AddCommentForm> = () => {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("");

  const onAddComment = () => {
    setClicked(false);
    setText("");
  };

  return (
    <div className={styles.form}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder={"Написать комментарий..."}
        fullWidth
        multiline
      />

      {clicked && (
        <Button style={{ height: 42 }} variant="contained" color="primary" onClick={onAddComment}>
          Опубликовать
        </Button>
      )}
    </div>
  );
};
