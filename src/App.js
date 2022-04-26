import CategoriesDisplay from "./components/CategoriesDisplay/CategoriesDisplay";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import Home from "./routes/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import SignIn from "./routes/SignIn/SignIn";

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <div className="App">
      <Routes>
        {" "}
        <Route path="/" element={<Navigation />}>
          {" "}
          <Route index element={<Home />}></Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
