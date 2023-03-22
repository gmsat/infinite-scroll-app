import { InfiniteScrollPhotos } from "./pages";
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
  return (
    <AppContainer>
      <InfiniteScrollPhotos/>
    </AppContainer>
  );
}

export default App
