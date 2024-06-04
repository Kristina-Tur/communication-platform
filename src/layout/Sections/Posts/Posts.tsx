// @flow
import * as React from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";

type Props = {

};
export const Posts = (props: Props) => {
    return (
        <Grid item >
            <Card>
                <CardContent>
                    <Typography variant="h5">Post title</Typography>
                    <Typography variant="body2">Post text...</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Like </Button>
                    <Button size="small">Comment</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};