import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: `YO`,
        status: this.props.status
    }
    activateEditeMode = () => {
        // this.state.editMode = true
        // this.forceUpdate()
        this.setState({editMode: true})
    }
    deactivateEditeMode = () => {
        // this.forceUpdate()
        this.setState({editMode: false})
        this.props.setStatusThunk(this.state.status)
    }
    onChangeStatus = (e) => {
        this.setState({status: e.currentTarget.value})
    }
    componentDidMount() {
        console.log(`componentDidMount`)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`componentDidUpdate`)
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        console.log(`render`)
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditeMode}> {this.props.status || `статуса нет`}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactivateEditeMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }


};

export default ProfileStatus;