import './App.css';
import Main from './Components/main/main';
import NotFound from './Components/notfound/notfound';
import { Routes, Route } from "react-router-dom";
import Navbarstatic from './Components/navbarstatic/navbarstatic';

function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"></link>
      <Navbarstatic />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
