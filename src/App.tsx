import TestButton from "./components/common/TestButton";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { PhotosCuratedList } from "./components";
import { FavoritesModal } from "./components";

function App() {

  // fetch photos from API

  // TODO: infinite scroll
  // TODO: as user navigates to the bottom of page, fetch next page data
  // TODO: append fetched data and load it for the user

  // TODO: feature to add photo to favorites or remove from the list of favorites
  // TODO: save favorites to local storage so data stays after refresh

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen((prevState) => !prevState);
    console.log("modal open", modalOpen);
  }

  return (
    <>
      <button onClick={handleModalOpen}>Favorites</button>
      <FavoritesModal open={modalOpen}/>
      <PhotosCuratedList/>
    </>
  );
}

export default App
