import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="">      
      <BrowserRouter>      
        <Routes>
        
          <Route path="/" element={<Home /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}