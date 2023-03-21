import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { PhotosCuratedList } from "./components";
import { FavoritesModal } from "./components";
import styled from "@emotion/styled";
import Modal from "./components/common/Modal/Modal";

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
      {/*<Modal open={modalOpen} onClose={handleModalOpen}>*/}
      {/*  <div>implement open/close</div>*/}
      {/*  <div>render favorites in this modal</div>*/}
      {/*</Modal>*/}
      <button onClick={handleModalOpen}>Favorites</button>
      <FavoritesModal open={modalOpen} onClose={handleModalOpen}/>
      <PhotosCuratedList/>
    </AppContainer>
  );
}

export default App
