import React from 'react';
import styled from 'styled-components';

export const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
            {showModal ? <div className='modal'>I'm a Modal</div> : null}
        </>
    )
}