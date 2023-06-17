import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Levels from "./pages/Levels";

function App(){
  
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="levels" element={<Levels />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
