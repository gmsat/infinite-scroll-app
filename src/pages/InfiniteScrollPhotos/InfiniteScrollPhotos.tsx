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
      <Flex>
        <PhotosCuratedList/>
      </Flex>
    </>
  );
};

export default InfiniteScrollPhotos;