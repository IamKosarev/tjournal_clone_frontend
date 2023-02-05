import {Button, Input} from "@material-ui/core";
import {FC, useEffect} from "react";
import EditorJS from "@editorjs/editorjs";
import styles from "./WriteForm.module.scss"
import dynamic from "next/dynamic";
import {TextsmsOutlined as MessageIcon} from "@material-ui/icons";

const Editor = dynamic(() => import("../Editor").then(m => m.Editor), {ssr: false})

interface WriteFormProps {
    title?: string;
}

export const WriteForm: FC<WriteFormProps> = ({title}) => {


    return (
        <div>
            <Input classes={{root: styles.titleField}} placeholder={"Заголовок"} defaultValue={title}/>
            <div className={styles.editor}>
                <Editor/>
            </div>
            <Button style={{ height: 42 }} variant="contained" color="primary">
                <MessageIcon className="mr-10" />
                Опубликовать
            </Button>
        </div>
    )
}