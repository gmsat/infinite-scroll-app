import React, { useEffect, useState } from 'react';
import { FavoritesModal, Flex, PhotosCuratedList } from "../../components";
import { Button } from "../../components";
import styled from "@emotion/styled";
import Portal from "../../components/common/Utility/Portal";
import { Toolbar } from "../../components";
import { theme } from "../../assets/themes/theme";

const FloatingButtonStyle = styled(Button)({
  position: "fixed",
  top: 50,
  right: 10,
  width: "100px"
});

const InfiniteScrollPhotos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const specialShadow = theme.shadows.special;

  const handleOpenModal = () => {
    setModalOpen((prevState) => !prevState);
  }

  return (
    <>
      <Toolbar position={"sticky"} style={{top: 0, zIndex: 2, backgroundColor: "#e7e7e7", boxShadow: theme.shadows.special}}>
        <Flex style={{width: "100%", maxWidth: "90vw", margin: "auto", justifyContent: "flex-end", paddingTop: 10, paddingBottom: 10}}>
          <Button onClick={handleOpenModal} backgroundColor={theme.colors.secondary}>Favorites</Button>
        </Flex>
      </Toolbar>
      <FavoritesModal open={modalOpen} onClose={handleOpenModal}/>
      <Flex style={{width: "100%", maxWidth: "90vw", margin: "auto"}}>
        <PhotosCuratedList/>
      </Flex>
    </>
  );
};

export default InfiniteScrollPhotos;