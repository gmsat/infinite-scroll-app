import styled from "@emotion/styled";
import React, { ReactNode } from "react";

export const FadeTransition = styled('div')({
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  '&.show': {
    opacity: 1,
    transitionDuration: "0.1s"
  }
});

interface FadeProps {
  children: ReactNode,
  show: boolean
}

export const Fade: React.FC<FadeProps> = ({children, show}) => {
  return (
    <FadeTransition className={show ? 'show' : ''}>
      {children}
    </FadeTransition>
  )
}