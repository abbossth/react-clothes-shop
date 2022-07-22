import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import { useContext } from "react";
import { UserContext } from "./contexts/user.context";

const Shop = () => {
  const { currentUser } = useContext(UserContext);
  return <h1>Welcome to Shop{currentUser !== null ? ', ' + currentUser.displayName : ''} </h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/auth" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
