import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  )
}