import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

export const MessageForm = (/*{ onSendMessage: string }*/) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!message.trim()) return; // Предотвратить отправку пустых сообщений
        /*onSendMessage(message);*/
        setMessage(''); // Очистить поле ввода после отправки
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center" justifyContent={'flex-end'}>
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Введите сообщение..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth variant="contained" color="primary" type="submit">
                        Отправить
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
