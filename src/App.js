import Login from "./pages/login";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Regist from './pages/regist';
import Main from "./pages/main";
import Product from "./pages/product";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
