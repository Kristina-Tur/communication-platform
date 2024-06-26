import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';
import { TextField, Button, Grid } from '@mui/material';
import {ActionType} from "../../../../redux/store";
import {sendMessageAC, updateMessageTextAC} from "../../../../redux/messages-reducer";

type MessageFormType = {
    messageText: string
    dispatch: (action: ActionType) => void
}

export const MessageForm = ({messageText, dispatch}: MessageFormType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            dispatch(updateMessageTextAC(e.currentTarget.value))
        }
    }

    const onClickHandler = () => {
        dispatch(sendMessageAC())
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // очищаем форму после отправки
        e.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center" justifyContent={'flex-end'}>
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Введите сообщение..."
                        value={messageText}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth variant="contained" color="primary" type="submit" onClick={onClickHandler}>
                        Отправить
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
