import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 354px;
    height: 500px;
    transform: translate(calc(-50% + 270px), -170px);
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
    margin-left: 50%;
    transform: translate(-100px, -5px);
    margin-top: 50px;
    width: 275px;
    height: 275px;
    border-radius: 10px 10px 10px 10px;
    background: #000;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    
    p {
        transform: translate(-365px, 220px);
        font-size: 15px;
        margin-top: 25px;
        padding-left: 16px;
        padding-right: 16px;
        line-height: 1.2;
    }
    
    buttonone {
        transform: translate(-365px, 210px);
        padding: 10px 18px;
        background: #141414;
        color: #FFF;
        border: none;
        cursor: pointer;
    }
    
    buttontwo {
        transform: translate(-195px, 162px);
        padding: 10px 18px;
        background: #141414;
        color: #FFF;
        border: none;
        cursor: pointer;
    }
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
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
                            <p>Features rocket-pack and laser eyes on lunar surface background with laptop in hand validating the blockchain. Indeed, Frankenmiller's Bufficorn is the most awesome of entire Bufficorn BUIDLr<br />  🦬 🦬 🦬 🦬 🦬 🦬 Brigade! 🦬 🦬 🦬 🦬 🦬 🦬</p>
                            <buttonone>Make an Offer!</buttonone>
                            <buttontwo>How about trade?</buttontwo>
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' 
                         onClick={() => setShowModal(prev => ! prev)} />
                    </ModalWrapper>
                </Background>
            ) : null }
        </>
    )
}