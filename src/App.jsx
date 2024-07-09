import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  )
}