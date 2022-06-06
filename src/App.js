import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>I am Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/main" element={<h1>Main</h1>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
