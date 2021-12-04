import { Component } from "react";
import { createPortal } from "react-dom";
import s from './Modal.module.scss'
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown',this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    };
    handleClickBack = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    };

    render() {
        return createPortal(
            <div className={s.Overlay} onClick={this.handleClickBack}>
                <div className={s.Modal}>
                    <div className={s.Modal__content}>{this.props.children}</div>
                <img src="" alt="" />
            </div>
            </div>,
            modalRoot
        )
    };
};

Modal.propTypes = {
    children: [],
};

Modal.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
}

export default Modal