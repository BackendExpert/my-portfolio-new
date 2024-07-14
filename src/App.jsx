import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/HomePage/Content";

export default function App() {
  return (
    <div className="">     
      <BrowserRouter>            
        <Routes>        
          <Route path="/" element={<Content /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}