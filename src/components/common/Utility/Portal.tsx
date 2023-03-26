import React, { ReactNode } from 'react';
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode,
  container: Element | DocumentFragment
}

export const Portal: React.FC<PortalProps> = ({children, container}) => {
  return (
    <>
      {createPortal(<>{children}</>, container)}
    </>
  );
};