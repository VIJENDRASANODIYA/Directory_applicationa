import "./styles.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDataPage from "./component/Pages/AddDataPage";
import RecieveDataPage from "./component/Pages/RecieveDataPage";
export default function App() {
  return (
    <div className="App">
      <h1
        className=" p-3 text-white text-center"
        style={{ backgroundColor: "rgb(44, 112, 190)" }}
      >
        Vijendra Directories
      </h1>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AddDataPage />} />
          <Route path="/Retrive" element={<RecieveDataPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
