import PageItem from "./Components/PageItem/PageItem.tsx";
import TollBar from "./Components/TollBar/TollBar.tsx";
import { Route, Routes } from "react-router-dom";
import Admin from "./Container/Admin/Admin.tsx";
import Home from "./Container/Home/Home.tsx";

const App = () => {
  return (
    <>
      <header>
        <TollBar></TollBar>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pages/:pageName" element={<PageItem/>}/>
        <Route path="/pages/admin" element={<Admin/>}/>
      </Routes>
    </>
  );
};

export default App;
