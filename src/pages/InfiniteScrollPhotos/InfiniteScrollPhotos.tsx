import React, { useState } from 'react';
import { FavoritesModal, PhotosCuratedList } from "../../components";
import { Button } from "../../components";
import styled from "@emotion/styled";
import Portal from "../../components/common/Utility/Portal";

const FloatingButtonStyle = styled(Button)({
  position: "fixed",
  top: 50,
  right: 10,
  width: "100px"
});

const InfiniteScrollPhotos = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen((prevState) => !prevState);
  }

  return (
    <>
      <Portal container={document.body}>
        <FloatingButtonStyle onClick={handleOpenModal}>Favorites</FloatingButtonStyle>
      </Portal>
      <FavoritesModal open={modalOpen} onClose={handleOpenModal}/>
      <PhotosCuratedList/>
    </>
  );
};

export default InfiniteScrollPhotos;