import React, { useState } from 'react';
import { FavoritesModal, PhotosCuratedList } from "../../components";
import { theme } from "../../assets/themes/theme";
import { Button, Flex, Toolbar } from "../../components/common";

const InfiniteScrollPhotos = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen((prevState) => !prevState);
  }

  return (
    <>
      <Toolbar position={"sticky"} style={{top: 0, zIndex: 2, backgroundColor: "#e7e7e7", boxShadow: theme.shadows.special}}>
        <Flex style={{width: "100%", margin: "auto", justifyContent: "flex-end", paddingTop: 12, paddingBottom: 12, paddingLeft: 34, paddingRight: 34, boxSizing: "border-box"}}>
          <Button onClick={handleOpenModal} backgroundColor={theme.colors.secondary}>Favorites</Button>
        </Flex>
      </Toolbar>
      <FavoritesModal open={modalOpen} onClose={handleOpenModal}/>
      <Flex style={{paddingLeft: "20px", paddingRight: "20px"}}>
        <PhotosCuratedList/>
      </Flex>
    </>
  );
};

export default InfiniteScrollPhotos;