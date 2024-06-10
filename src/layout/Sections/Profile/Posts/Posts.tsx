// @flow
import * as React from 'react';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

type Props = {

};
export const Posts = (props: Props) => {
    return (
            <Card sx={{marginBottom: '50px'}}>
                <CardContent>
                    <Typography variant="h5">Post title</Typography>
                    <Typography variant="body2">Post text...</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Like </Button>
                    <Button size="small">Comment</Button>
                </CardActions>
            </Card>
    );
};