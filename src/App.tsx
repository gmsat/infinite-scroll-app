import TestButton from "./components/common/TestButton";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { PhotosCuratedList } from "./components";

function App() {

  // fetch photos from API

  // TODO: infinite scroll
  // TODO: as user navigates to the bottom of page, fetch next page data
  // TODO: append fetched data and load it for the user

  // TODO: feature to add photo to favorites or remove from the list of favorites
  // TODO: save favorites to local storage so data stays after refresh

  return (
    <div>
      <PhotosCuratedList/>
    </div>
  );
}

export default App
