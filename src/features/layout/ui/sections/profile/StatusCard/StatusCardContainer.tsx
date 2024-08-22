import React from "react";
/*import {StatusCard} from "./StatusCard";
import {RouteComponentProps} from "react-router-dom";
import {RootState} from "../../../../../../app/store-redux";
import {connect} from "react-redux";
import {getStatusTC, updateStatusTC} from "../../../../model/profile-reducer";



type Props = RouteComponentProps<{ userId: string }> & {
    status: string
    getStatus: (userId: number) => void;
    updateStatus: (status: string) => void;
};

type ProfileContainerState = {
};

class StatusCardAPIContainer extends React.Component<any, ProfileContainerState>{
    componentDidMount() {
        let userId = +this.props.match?.params.userId
        if(!userId){
            userId = 31392
        }
        this.props.getStatus(userId)
    }
    render() {
        return <StatusCard userName={'ddd'}
                           status={this.props.status}
                           updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        status: state.profilePage.status
    }
}

export const StatusCardContainer = connect(mapStateToProps,
    {
        getStatus: getStatusTC,
        updateStatus: updateStatusTC
    })(StatusCardAPIContainer)



*/
