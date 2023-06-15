import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, 
  Route, Navigate,} from "react-router-dom";

import Startscherm from './Startscherm';
import Info from './Info';
import Levels from './Levels';

function App(){

  return (
    <>
        <Routes>
          <Route path="/" element={<div class="startscherm"><Startscherm /></div>}> </Route>
          <Route path="/info" element={<div class="startscherm"><Info /></div>}> </Route>
          <Route path="/levels" element={<div class="startscherm"><Levels /></div>}> </Route>
        </Routes>
        {/* <Navigate to="/" /> */}
    </>
  );
    // return <div class="startscherm"><Startscherm /></div>
}

export default App;
