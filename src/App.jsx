import { Route, Routes } from "react-router-dom";
import ShareForward from "./pages/ShareForward";

function App() {
  return (
    <>
      <Routes>
        <Route path="/share/:shareId" element={<ShareForward />} />
      </Routes>
    </>
  );
}

export default App;
