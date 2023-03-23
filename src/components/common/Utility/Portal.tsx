import React, { ReactNode } from 'react';
import { createPortal } from "react-dom";
import { ReactPortal } from "react";

interface PortalProps {
  children: ReactNode,
  container: Element | DocumentFragment
}

const Portal: React.FC<PortalProps> = ({children, container}) => {
  return (
    <>
      {createPortal(<>{children}</>, container)}
    </>
  );
};

export default Portal;