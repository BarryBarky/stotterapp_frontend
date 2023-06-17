import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Levels from "./pages/Levels";

const fs = require('fs');
const http = require('http');
const https = require('https');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/oriantar.nl/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/oriantar.nl/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/oriantar.nl/chain.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

app.use((req, res) => {
  res.send('Hello HTTPS!');
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () =>{
  console.log('HTTP Server running on port 80');
});
httpsServer.listen(443, () =>{
  console.log('HTTP Server running on port 443');
});

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
