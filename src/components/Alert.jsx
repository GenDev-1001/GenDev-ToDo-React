import React, {useContext} from "react";
import {CSSTransition} from 'react-transition-group'
import {AlertContext} from "../context/alert/AlertContext";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 250,
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Warning!</strong>&nbsp; {alert.text}
                <button onClick={hide} type="button" className="btn-close btn-sm" aria-label="Close">
                </button>
            </div>
        </CSSTransition>
    )
}
