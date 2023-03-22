import React, { useState } from 'react';
import { FavoritesModal, PhotosCuratedList } from "../../components";

const InfiniteScrollPhotos = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen((prevState) => !prevState);
  }

  return (
    <>
      <button onClick={handleModalOpen}>Favorites</button>
      <FavoritesModal open={modalOpen} onClose={handleModalOpen}/>
      <PhotosCuratedList/>
    </>
  );
};

export default InfiniteScrollPhotos;