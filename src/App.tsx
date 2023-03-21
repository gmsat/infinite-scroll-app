import { useState } from "react";
import { FavoritesModal, PhotosCuratedList } from "./components";
import styled from "@emotion/styled";

const AppContainer = styled('div')({
  display: "flex",
  margin: "0",
  padding: 0,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e7e7e7"
});

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen((prevState) => !prevState);
  }

  return (
    <AppContainer>
      <button onClick={handleModalOpen}>Favorites</button>
      <FavoritesModal open={modalOpen} onClose={handleModalOpen}/>
      <PhotosCuratedList/>
    </AppContainer>
  );
}

export default App
