import React, { MouseEventHandler, ReactNode } from 'react';
import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import { Flex } from "../Layout/Flex";

export const ModalBox = styled('div')({
  position: "relative",
  backgroundColor: "white",
  width: "70%",
  height: "90%",
  margin: "auto",
  border: "solid darkgrey 1px",
  borderRadius: "12px",
  overflowY: "clip"
});

const ModalContent = styled('div')({
  overflowY: "auto",
  height: "93%"
});

export const ModalContainer = styled('div')({
  position: "fixed",
  backgroundColor: "rgba(0,0,0,0.6)",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const CloseButton = styled('div')({
  fontSize: "3rem",
  lineHeight: "3rem",
  userSelect: "none",
  padding: 0,
  margin: 0,
  textDecoration: "none",
  width: "50px",
  height: "50px",
  textAlign: "center",
  fontWeight: "bold",
  ':hover': {
    cursor: "pointer",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: "12px"
  }
});

const ModalDivider = styled('div')({
  width: "100%",
  borderTop: "solid 1px #dadada",
  backgroundColor: "#dadada"
});

const ModalTitle = styled('text')({
  fontSize: "2rem",
  fontWeight: "bold",
  flex: 1,
  marginLeft: 20
})

const CloseModalButton = ({onClick}: {onClick: MouseEventHandler<HTMLDivElement>}) => {
  return (
    <CloseButton onClick={onClick}>&#x2716;</CloseButton>
  )
}

interface ModalProps {
  children?: ReactNode,
  onClose: MouseEventHandler<HTMLDivElement>,
  open: boolean,
  title?: string
}

const Modal: React.FC<ModalProps> = ({children, onClose, open, title}) => {
  function renderModal() {
    return (
      <>
        <ModalContainer>
          <ModalBox>
            <Flex style={{justifyContent: "flex-end", padding: 4}}>
              <ModalTitle>{title}</ModalTitle>
              <CloseModalButton onClick={onClose}/>
            </Flex>
            <ModalDivider/>
            <ModalContent>
              {children}
            </ModalContent>
          </ModalBox>
        </ModalContainer>
      </>
    )
  }

  return (
    <>
      {open ? createPortal(renderModal(), document.body) : null}
    </>
  );
};

export default Modal;