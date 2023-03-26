import React, { MouseEventHandler, ReactNode } from 'react';
import styled from "@emotion/styled";
import { Flex } from "../Layout/Flex";
import { Portal } from "../Utility/Portal";

interface ModalContainerProps {
  backdropFilter?: string
}

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

export const ModalContainer = styled('div')<ModalContainerProps>({
  position: "fixed",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "brightness(40%) blur(12px)",
  zIndex: 1000000
}, props => ({
  backdropFilter: props.backdropFilter
}));

const CloseButton = styled('div')({
  fontSize: "3rem",
  lineHeight: "3rem",
  userSelect: "none",
  padding: 0,
  margin: 0,
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
});

const CloseModalButton = ({onClick}: { onClick: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <CloseButton onClick={onClick}>&#x2716;</CloseButton>
  )
}

interface ModalProps {
  children?: ReactNode,
  title?: string,
  backdropFilter?: string
  open: boolean,
  onClose: MouseEventHandler<HTMLDivElement>,
}

export const Modal: React.FC<ModalProps> = ({children, onClose, open, title, backdropFilter}) => {
  function renderModal() {
    return (
      <Portal container={document.body}>
        <ModalContainer backdropFilter={backdropFilter}>
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
      </Portal>
    )
  }

  return (
    <>
      {open ? renderModal() : null}
    </>
  );
};