import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(25, 25, 25);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #FFF;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {margin-bottom: 1rem;}

    button {
        padding: 10px 24px;
        background: #141414;
        color: #FFF;
        border: none;
    }
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0px;
    z-index: 10;
`


export const Modal = ({ showModal, setShowModal }) => {
    
    return (
        <>
            {showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalImg alt="ultra hi-def png image of frankenmiller's Bufficorn"
                         src={require('./frankenmiller-bufficorn.png')} />
                        <ModalContent>
                            <h1>Bufficorn #659</h1>
                            <p>Features rocket-pack and laser eyes on lunar surface background with laptop in hand validating the blockchain</p>
                            <button>Make an Offer!</button>
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' 
                         onClick={() => setShowModal(prev => ! prev)} />
                    </ModalWrapper>
                </Background>
            ) : null }
        </>
    )
}