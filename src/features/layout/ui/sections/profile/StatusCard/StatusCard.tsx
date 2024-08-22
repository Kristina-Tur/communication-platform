import React, {ChangeEvent} from 'react';
import {Card, CardContent, Typography, Divider, styled as styledMUI} from '@mui/material';
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit"
import {ProfileApi} from "../../../../../api/API";
import styled from "styled-components";

const StyledCard = styledMUI(Card)(({theme}) => ({
    marginBottom: '20px',
    padding: '-15px',
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '4px',
    boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    overflow: 'hidden',
    width: '100%'
}));

const UserNameTypography = styledMUI(Typography)({
    fontSize: 20,
    fontWeight: 'bold',
});

const StatusTypography = styledMUI(Typography)(({theme}) => ({
    fontSize: 18,
    marginTop: theme.spacing(1),
}));

type Props = {
    userName: string
    status: string
    updateStatus: (status: string) => void
}

export class StatusCard extends React.Component<Props, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        if(this.props.status && this.props.status.length < 50){
            this.props.updateStatus(this.state.status)
        }

    }
    setStatusHandler(e: ChangeEvent<HTMLInputElement>){
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps:Readonly<Props>, prevState:Readonly<any>, snapshot?:any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <StyledCard>
                <CardContent>
                    <UserNameTypography gutterBottom sx={{fontSize: '16px'}}>
                        Status
                    </UserNameTypography>
                    <Wrapper>
                        {
                            this.state.editMode
                                ? <TextField
                                    label="Edit Status"
                                    variant="outlined"
                                    value={this.state.status}
                                    onChange={this.setStatusHandler.bind(this)}
                                    onBlur={this.deactivateEditMode.bind(this)}
                                    fullWidth
                                    margin="normal"
                                    autoFocus
                                />
                                : <StatusTypography>
                                    {this.props.status || 'No status'}
                                </StatusTypography>
                        }
                        <IconButton onClick={this.activateEditMode.bind(this)} aria-label="edit" /*disabled={disabled}*/>
                            <EditIcon/>
                        </IconButton>
                    </Wrapper>
                    {this.props.status && this.props.status.length > 50 && <div style={{color: "red"}}>The length of the status should be no more than 30 characters</div>}
                </CardContent>
            </StyledCard>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`