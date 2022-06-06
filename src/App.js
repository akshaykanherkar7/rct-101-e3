import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./components/Products/Product/Product";
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
      {
        // Code here
      }
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/products"}
          element={
            <RequiredAuth>
              <Products />
            </RequiredAuth>
          }
        ></Route>
      </Routes>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
