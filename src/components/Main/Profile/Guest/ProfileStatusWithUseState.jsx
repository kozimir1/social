import React, {useEffect, useState} from 'react';
import cl from './Guest.module.css'


const ProfileStatusWithUseState = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditeMode = () => {
        setEditMode(true)
    }
    const deactivateEditeMode = () => {
        setEditMode(false)
        props.setStatusThunk(status)
    }
    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditeMode}> {props.status || `статуса нет`}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditeMode}
                           value={status}/>
                </div>
            }
            {props.statusError &&
                <div className={cl.container}> <div style={{textAlign: "right"}}><span className={cl.close}
                onClick={()=>props.statusErrorAC(null)}>X</span></div>
                    <div>{props.statusError}</div>
                </div>}

        </div>
    )

}


export default ProfileStatusWithUseState;