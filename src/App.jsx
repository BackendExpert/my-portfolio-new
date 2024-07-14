import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";

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