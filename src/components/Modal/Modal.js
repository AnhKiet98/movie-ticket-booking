import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

export default class Modal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                {this.props.Component}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
