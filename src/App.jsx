import NavBar from "./componants/share/NavBar";
import Footer from "./componants/share/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./componants/pages/Home";
import DailyWard from "./componants/pages/DailyWard";
import Azkar from "./componants/pages/Azkar";
import NotFound from "./componants/notFound/NotFound";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ward" element={<DailyWard />}></Route>
        <Route path="/azkar" element={<Azkar />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
