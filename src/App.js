import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Levels from "./pages/Levels";
import Instructions from "./pages/Instructions";
import End from "./pages/End";

function App(){

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="instructies" element={<Instructions />} />
                    <Route path="levels" element={<Levels />} />
                    <Route path="einde" element={<End />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
